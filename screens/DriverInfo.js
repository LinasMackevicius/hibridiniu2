// In App.js in a new project
import React, { useState, useEffect } from 'react';
import { Button, View, Text, FlatList } from 'react-native';

import styles from '../myStyles.js'



const DriverInfoScreen = ({ route, navigation }) => {

    const { driverData } = route.params; // Get the selected driver's data
    const { firstname, lastname } = driverData;
  
    return (
      <View style={{ flex: 1, alignItems: 'left', justifyContent: 'center' }}>
       
        <Text style={styles.driver1}> {firstname} {lastname} </Text>

        <FlatList
          
          data={driverData.race}
          
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

  export default DriverInfoScreen;