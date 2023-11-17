// In App.js in a new project
import React, { useState, useEffect } from 'react';
import { Button, View, Text, FlatList, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




function StreetCategoryScreen({navigation, data})
{
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    // Importing local JSON file using require
    const data = require('./assets/data.json');
    setJsonData(data);
  }, []);

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text> Street category </Text>

    <FlatList
      data={jsonData.filter(league => league.league_id === 2)}
      
      keyExtractor={(item) => item.league_id.toString()}

      renderItem={({item}) => (
        <View>
          <Text>{`League Title: ${item.league_title}`}</Text>
            {item.drivers.map((driver, driverIndex) => (
              <View key={driverIndex} style={styles.driverStyle}>
                <Text>{`Driver ID: ${driver.driver_id}`}</Text>
                <Text>{`Name: ${driver.firstname} ${driver.lastname}`}</Text>
                <Text>{`Car: ${driver.car}`}</Text>
              </View>
            ))}
        </View>
      )}
    />


    <Button title="Go back" onPress={() => navigation.goBack()} />

    </View>

  );
}

const sumTheScoresOfTheDriver = (raceResults) => {
  if (!raceResults) return 0;
  
  // Calculate the total tandem points for a driver
  return raceResults.reduce((totalPoints, race) => totalPoints + race.tandem_points, 0);
};


const SemiProCategoryScreen = ({ navigation, route }) => {

  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    // Importing local JSON file using require
    const data = require('./assets/data.json');
    setJsonData(data);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Semi-pro category</Text>

      <FlatList
        data={jsonData.filter(league => league.league_id === 1)}
       
        keyExtractor={(item) => item.league_id.toString()}
       
        renderItem={({ item }) => (
          <View>
            <Text>{`League Title: ${item.league_title}`}</Text>

            {item.drivers.map((driver, driverIndex) => (

              <View key={driverIndex} style={styles.driverStyle}>
                <Text>{`Driver ID: ${driver.driver_id}`}</Text>
                <Text>{`Name: ${driver.firstname} ${driver.lastname}`}</Text>
                <Text>{`Car: ${driver.car}`}</Text>
                <Text>{`Score: ${sumTheScoresOfTheDriver(driver.race)}`}</Text>
              </View>

            ))}
          </View>
        )}
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
  driverStyle: {
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