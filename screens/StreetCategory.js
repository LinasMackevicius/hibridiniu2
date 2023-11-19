import React, { useState, useEffect } from 'react';
import { Button, View, Text, FlatList, Pressable } from 'react-native';

import { sumTheScoresOfTheDriver } from '../sumUp.js';
import styles from '../myStyles.js';

function StreetCategoryScreen({ navigation }) {

  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const data = require('../assets/data.json');
    setJsonData(data);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'left' }}>
      <Text style={styles.title}>STREET</Text>

      <FlatList
        data={jsonData.filter((league) => league.league_id === 2)}
        keyExtractor={(item) => item.league_id.toString()}
        renderItem={({ item }) => (
          <View>
            {item.drivers.map((driver, driverIndex) => (
              <View key={driverIndex} style={styles.driverStyle}>
                <Text>{`Name: ${driver.firstname} ${driver.lastname}`}</Text>
                <Text>{`Car: ${driver.car}`}</Text>
                <Text>{`Score: ${sumTheScoresOfTheDriver(driver.race)}`}</Text>
                <Pressable
                  style={styles.smallButton}
                  onPress={() => navigation.navigate('DriverInfo', { driverData: driver })}
                >
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

export default StreetCategoryScreen;


