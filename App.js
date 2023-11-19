
import React, { useState, useEffect } from 'react';
import { Button, View, Text, FlatList, StyleSheet, StatusBar, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './myStyles.js'

import StreetCategoryScreen from './screens/StreetCategory.js';
import SemiProCategoryScreen from './screens/SemiProCategory.js';
import DriverInfoScreen from './screens/DriverInfo.js';


function HomeScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'left', backgroundColor: '#1822db' }}>

      <View style={{ marginVertical: 10 }} />
      
      <Pressable style={styles.buttonPressable} onPress={onPressFunction = () => {navigation.navigate('Street')}}>
      <Text style={styles.buttonText}> STREET</Text>
      </Pressable>

    <View style={{ marginVertical: 10 }} />
      
    <Pressable style={styles.buttonPressable} onPress={onPressFunction = () => {navigation.navigate('SemiPro')}}>
      <Text style={styles.buttonText}> SEMI PRO</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        />

        <Stack.Screen
        name="Street"
        component= {StreetCategoryScreen}
        />

        <Stack.Screen
        name="SemiPro"
        component={SemiProCategoryScreen}
        />

        <Stack.Screen
        name="DriverInfo"
        component={DriverInfoScreen}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;