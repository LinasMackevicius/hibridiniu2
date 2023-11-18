// In App.js in a new project
import React, { useState, useEffect } from 'react';
import { Button, View, Text, FlatList, StyleSheet, StatusBar, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { sumTheScoresOfTheDriver } from './sumUp';


function StreetCategoryScreen({navigation, data})
{
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    // Importing local JSON file using require
    const data = require('./assets/data.json');
    setJsonData(data);
  }, []);

  return(
    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'left' }}>

    <Text style = {styles.title}> STREET </Text>

    <FlatList
      data={jsonData.filter(league => league.league_id === 2)}
      
      keyExtractor={(item) => item.league_id.toString()}

      renderItem={({item}) => (
        <View>
            {item.drivers.map((driver, driverIndex) => (
              <View key={driverIndex} style={styles.driverStyle}>
                <Text>{`Name: ${driver.firstname} ${driver.lastname}`}</Text>
                <Text>{`Car: ${driver.car}`}</Text>
                <Text>{`Score: ${sumTheScoresOfTheDriver(driver.race)}`}</Text>

                <Pressable style={styles.smallButton}  onPress={() => navigation.navigate('DriverInfo', {driverData: driver})}>
                <Text> more </Text>
                </Pressable>

              </View>
            ))}
        </View>
      )}
    />
    <Button title="Go back" onPress={() => navigation.goBack()} />

    </View>

  );
}

const SemiProCategoryScreen = ({ navigation, route }) => {

  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    // Importing local JSON file using require
    const data = require('./assets/data.json');
    setJsonData(data);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'center' }}>
      <Text style={styles.title}>SEMI RPO</Text>

      <FlatList
        data={jsonData.filter(league => league.league_id === 1)}
       
        keyExtractor={(item) => item.league_id.toString()}
       
        renderItem={({ item }) => (
          <View>
            {item.drivers.map((driver, driverIndex) => (

              <View key={driverIndex} style={styles.driverStyle}>
                <Text>{`Name: ${driver.firstname} ${driver.lastname}`}</Text>
                <Text>{`Car: ${driver.car}`}</Text>
                <Text>{`Score: ${sumTheScoresOfTheDriver(driver.race)}`}</Text>
                <Pressable style={styles.smallButton}  onPress={() => navigation.navigate('DriverInfo', {driverData: driver})} >
                <Text> more </Text>
                </Pressable>
              </View>
            ))}
          </View>
        )}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};


const DriverInfoScreen = ({ route, navigation }) => {

  const { driverData } = route.params; // Get the selected driver's data

  return (
    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'center' }}>
     
      <Text>INFORMATION ABOUT DRIVER </Text>

      <FlatList
        
        data={driverData.race} // Display the race information of the selected driver
        
        keyExtractor={(item) => item.race_id.toString()}
       
        renderItem={({ item }) => (
         
         <View style={styles.raceInfoStyle}>
            <Text style= {styles.simpleStyle} >{`RACE: ${item.race_information}`}</Text>
            
            <Text>{`Qualification Position: ${item.qualification_position}`}</Text>
            <Text>{`Qualification Result: ${item.qualification_result}`}</Text>
            <Text>{`Qualification Points: ${item.qualification_points}`}</Text>
            <Text>{`Tandem result: ${item.tandem_result}`}</Text>
            <Text>{`Tandem points: ${item.tandem_points}`}</Text>
          </View>
        )}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  driverStyle: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBlockColor: "black",
    borderWidth: 3,
  },

  raceInfoStyle: {
    backgroundColor: 'yellow',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
    borderBlockColor: "black",
    borderWidth: 3,
  },

  simpleStyle:{
    fontSize: 20,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 32,
    fontWeight: "bold"
  },

  buttonPressable: {
    height: 50,
    width: 250,
    backgroundColor: 'yellow',
  },

  buttonText: {
    textAlignVertical: 'center',
    alignItems: 'flex-end',
    fontWeight: "bold",
    fontSize: 25,
    textAlign: 'left'
  },

  smallButton: {
    backgroundColor: 'yellow',
    width: 50,
    borderBlockColor: "black",
    borderWidth: 1,
  }

  
});


export default App;