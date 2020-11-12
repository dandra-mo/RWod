import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';
import getRWod from './Workouts';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import WorkoutScreen from './workoutScreen';
import Timer from './timerScreen';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();


export default function App() {
 
  return (
  <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Workouts"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad' }}
      >
        <Tab.Screen name="Workouts" component={WorkoutScreen} />
        <Tab.Screen name="Timer" component={Timer} />
       
      </Tab.Navigator>
    <StatusBar />
  </NavigationContainer>
 
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',  
  },  
});
