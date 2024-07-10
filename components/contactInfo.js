import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar, Button, Card, Text, TextInput, Container } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="human-greeting-proximity" />

function ContactInfo({route, navigation}){
        const {fname, mname, lname} = route.params;
        const [contactTelephone, setTel] = useState("");
        const [contactCellphone, setNum] = useState("");
        const [contactEmail, setEmail] = useState("");
        const { register, setValue, handleSubmit, control, formState: { errors } } = useForm({
            defaultValues: {
                firstName: fname,
                lastName: mname,
                middleName: lname,
                birthDate: '',
                gender: '',
                contactTelephone: '',
                contactCellphone: '',
                contactEmail: '',
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
                            label='Telephone Number'
                            onBlur={onBlur}
                            onChangeText={(text) => setTel(text)}
                        />
                    )}
                    name="contactTelephone"
                    rules={{ required: true }} />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            outlineColor='rgb(119, 87, 77)'
                            activeOutlineColor = 'rgb(107, 94, 47)'
                            style={{marginTop: 20}}
                            mode='outlined'
                            label='Email'
                            onBlur={onBlur}
                            onChangeText={(text) => setEmail(text)}
                            />
                    )}
                    name="contactEmail"
                    rules={{ required: true }} />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            outlineColor='rgb(119, 87, 77)'
                            activeOutlineColor = 'rgb(107, 94, 47)'
                            style={{marginTop: 20}}
                            label='Cellphone Number'
                            mode='outlined'
                            onBlur={onBlur}
                            onChangeText={(text) => setNum(text)}
                            />
                    )}
                    name="contactCellphone"
                    rules={{ required: true }} />

                    <View style={styles.button}>
                        <Button
                            mode="contained"
                            onPress={() => navigation.navigate('Address', {
                                fname,
                                mname,
                                lname,
                                contactTelephone,
                                contactCellphone,
                                contactEmail,
                            })}>
                            Go to Address Info
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
    export default ContactInfo;