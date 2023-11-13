// In App.js in a new project
import * as React from 'react';
import { Button, View, Text, useState, FlatList, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import drivers from './data.json';




function StreetCategoryScreen({navigation, data})
{
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text> Street category </Text>
    <Text>  </Text>
    <Button title="Go back" onPress={() => navigation.goBack()} />

    </View>

  );
}
const Item = ({ driver_id, firstname, lastname, car }) => (
  <View style={styles.item}>
    <Text style={styles.title}> {`${firstname} ${lastname} - ${car}`} </Text>
  </View>
);

const renderItem = ({ item }) => (
  <Item driver_id={item.driver_id} firstname={item.firstname} lastname={item.lastname} car={item.car} />)

const SemiProCategoryScreen = ({ navigation }) => {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Semi-pro category</Text>
     
      <FlatList
        data={drivers}
        renderItem={renderItem}
        keyExtractor={(item) => item.driver_id}
       
      />

      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};



function HomeScreen({ route, navigation }) {

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button

        title="STREET"
        
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Street');
        }}
      />

    <View style={{ marginVertical: 10 }} />
      
      <Button
        title="SEMI-PRO"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('semiPro');
        }}
      />
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
        name="semiPro"
        component={SemiProCategoryScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});




export default App;