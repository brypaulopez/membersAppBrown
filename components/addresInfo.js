import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import ContactInfo from './contactInfo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar, Button, Card, Text, TextInput, Container } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="map-marker" />

function AddressInfo({route, navigation}){
        const {fname, mname, lname, contactTelephone, contactCellphone, contactEmail} = route.params;
        const { register, setValue, handleSubmit, control, formState: { errors } } = useForm({
            defaultValues: {
                firstName: fname,
                lastName: mname,
                middleName: lname,
                birthDate: '',
                gender: '',
                contactTelephone: contactTelephone,
                contactCellphone: contactCellphone,
                contactEmail: contactEmail,
                civilStatus: '',
                unitAddress: '',
                street: '',
                barangay: '',
                municipality: '',
                city: '',
                province: '',
                zipcode: '',
                region: ''
            }
        });
        const onSubmit = data => {
            console.warn(data);

            fetch("http://127.0.0.1:8000/members", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: fname,
                    lastName: mname,
                    middleName: lname,
                    birthDate: '',
                    gender: '',
                    contactTelephone: contactTelephone,
                    contactCellphone: contactCellphone,
                    contactEmail: contactEmail,
                    civilStatus: '',
                    unitAddress: '',
                    street: '',
                    barangay: '',
                    municipality: '',
                    city: '',
                    province: '',
                    zipcode: '',
                    region: ''
                }),
              })
                .then((response) => response.json())
                .then((response) => {
                  console.log(JSON.stringify(response));
                })
          };
        return (
            <View style={styles.container}>
                <Card>
                    <Card.Title left={LeftContent} />
                    <Card.Cover source={{ uri: 'https://picsum.photos/id/42/700' }} />
                    <Card.Actions>
                    </Card.Actions>
                </Card>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            outlineColor='rgb(119, 87, 77)'
                            activeOutlineColor = 'rgb(107, 94, 47)'
                            style={{marginTop: 20}}
                            mode='outlined'
                            label='Municipality'
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="municipality"
                    rules={{ required: true }} />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            outlineColor='rgb(119, 87, 77)'
                            activeOutlineColor = 'rgb(107, 94, 47)'
                            style={{marginTop: 20}}
                            mode='outlined'
                            label='Region'
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            />
                    )}
                    name="region"
                    rules={{ required: true }} />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            outlineColor='rgb(119, 87, 77)'
                            activeOutlineColor = 'rgb(107, 94, 47)'
                            style={{marginTop: 20}}
                            label='City'
                            mode='outlined'
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            />
                    )}
                    name="city"
                    rules={{ required: true }} />

                    <View style={styles.button}>
                        <Button
                            mode="contained"
                            onPress={handleSubmit(onSubmit)}>
                            Submit
                        </Button>
                    </View>
            </View>
        )
    }

    const styles = StyleSheet.create({
        label: {
          color: 'white',
          margin: 20,
          marginLeft: 0,
        },
        button: {
          marginTop: 40,
          color: 'black',
          height: 40,
          borderRadius: 4,
        },
        container: {
          flex: 1,
          justifyContent: 'center',
          paddingTop: Constants.statusBarHeight,
          padding: 8,
          backgroundColor: '#EBEDF0',
        },
      });
    export default AddressInfo;