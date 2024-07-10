import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactInfo from './components/contactInfo';
import PersonalInfo from './components/personalInfo';
import AddressInfo from './components/addresInfo';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
const Stack = createNativeStackNavigator();


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(155, 68, 39)',
    primaryContainer: 'rgb(255, 219, 208)',
    onPrimary: 'rgb(255, 255, 255)',
    secondary: 'rgb(119, 87, 77)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(255, 219, 208)',
    tertiary: 'rgb(107, 94, 47)',
    onTertiary: 'rgb(255, 255, 255)',
    onTertiaryContainer: 'rgb(34, 27, 0)'
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Personal' component={PersonalInfo} options={{
            headerStyle: {
              backgroundColor: 'rgb(155, 68, 39)',
            },
            headerTintColor: 'white',
          }}/>
          <Stack.Screen name='Contact' component={ContactInfo} options={{
            headerStyle: {
              backgroundColor: 'rgb(155, 68, 39)',
            },
            headerTintColor: 'white',
          }}/>
          <Stack.Screen name='Address' component={AddressInfo} options={{
            headerStyle: {
              backgroundColor: 'rgb(155, 68, 39)',
            },
            headerTintColor: 'white',
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: '#a9c0c1',
    height: 40,
    backgroundColor: '#3e824e',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#cec9c7',
  },
  input: {
    backgroundColor: 'white',
    borderColor: '#afaa9e',
    borderWidth: 3,
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
