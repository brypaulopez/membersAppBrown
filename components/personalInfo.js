import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import ContactInfo from './contactInfo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar, Button, Card, Text, TextInput, Container } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const LeftContent = props => <Avatar.Icon {...props} icon="account-box" />

function PersonalInfo({navigation}){
        const [fname, setfName] = useState("");
        const [mname, setmName] = useState("");
        const [lname, setlName] = useState("");
        const { register, setValue, handleSubmit, control, formState: { errors } } = useForm({
            defaultValues: {
                firstName: '',
                lastName: '',
                middleName: '',
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
                            label='First Name'
                            onBlur={onBlur}
                            onChangeText={(text)=>setfName(text)}
                        />
                    )}
                    name="firstName"
                    rules={{ required: true }} />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            outlineColor='rgb(119, 87, 77)'
                            activeOutlineColor = 'rgb(107, 94, 47)'
                            style={{marginTop: 20}}
                            mode='outlined'
                            label='Middle Name'
                            onBlur={onBlur}
                            onChangeText={(text)=>setmName(text)}
                            />
                    )}
                    name="middleName"
                    rules={{ required: true }} />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            outlineColor='rgb(119, 87, 77)'
                            activeOutlineColor = 'rgb(107, 94, 47)'
                            style={{marginTop: 20}}
                            mode='outlined'
                            label='Last Name'
                            onBlur={onBlur}
                            onChangeText={(text)=>setlName(text)}
                            />
                    )}
                    name="lastName"
                    rules={{ required: true }} />

                    <View style={styles.button}>
                        <Button
                            mode="contained"
                            onPress={() => navigation.navigate('Contact', {
                                fname,
                                mname,
                                lname,
                            })}>
                            Go to Contact Info
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
    export default PersonalInfo;