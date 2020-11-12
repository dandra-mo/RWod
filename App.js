import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';
import getRWod from './Workouts';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import WorkoutScreen from './workoutScreen';
import Timer from './timerScreen';
import { Ionicons }  from '@expo/vector-icons'




const Tab = createMaterialBottomTabNavigator();


export default function App() {
 
  return (
  <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Workouts') {
              iconName = focused
                ? 'ios-fitness'
                : 'ios-fitness';
            } else if (route.name === 'Timer') {
              iconName = focused 
              ? 'ios-stopwatch' 
              : 'ios-stopwatch';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#f0edf6',
          inactiveTintColor: '#3e2465',
        }}
      >

        <Tab.Screen name="Workouts" component={WorkoutScreen} />
        <Tab.Screen name="Timer" component={Timer} />
       
      </Tab.Navigator>
    <StatusBar />
  </NavigationContainer>
 
 );
}


