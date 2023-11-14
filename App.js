// In App.js in a new project
import * as React from 'react';
import { Button, View, Text, FlatList, StyleSheet, StatusBar, useState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


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


const SemiProCategoryScreen = ({ navigation, route }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Semi-pro category</Text>

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
          navigation.navigate('SemiPro');
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
        name="SemiPro"
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