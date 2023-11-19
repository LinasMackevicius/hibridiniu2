import React, { useState, useEffect } from 'react';
import { Button, View, Text, FlatList, Pressable } from 'react-native';

import { sumTheScoresOfTheDriver } from './sumUp';
import styles from './myStyles.js'; 

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

  export default SemiProCategoryScreen;