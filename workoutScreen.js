import React, { useState } from 'react'
import { Text, View, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import getRWod  from './Workouts'
import FAB from 'react-native-fab'
import { Feather } from '@expo/vector-icons';

const workoutScreen = () => {
    const [rWod, setRwod] = useState(getRWod()) 
    const newRwod = () => setRwod(getRWod())

    return (
    <View style={styles.container}>
      <View>
        <View style={styles.title}>
            <Text style={styles.text}>Today's Wod</Text>
        </View>
      </View>


    <View style={styles.inner}>
      <ScrollView>
          <View style={styles.one}>
            <View style={styles.power}>
              <Text style={styles.heading}>Power</Text>
              <Text style={styles.text}>{rWod.power.movement}</Text>
              <Text style={styles.reps}>{rWod.power.repScheme}</Text>
            </View>
          </View>

          <View style={styles.one}>
          <View style={styles.strength}> 
            <Text style={styles.heading}>Strength</Text>
            <Text style={styles.text}>{rWod.strength.movement}</Text>
            <Text style={styles.reps}>{rWod.strength.repScheme}</Text>
          </View>
        </View>

          <View style={styles.one}>
          <View style={styles.accesory}>
            <Text style={styles.heading}>Accessory</Text>
            <Text style={styles.text}>{rWod.superSet.movement1}</Text>
            <Text style={styles.reps}>{rWod.superSet.repScheme1}</Text>

            <Text style={styles.text}>{rWod.superSet.movement2}</Text>
            <Text style={styles.reps}>{rWod.superSet.repScheme2}</Text>
          </View>
          </View>
        
        <View style={styles.one}>
          <View style={styles.metcon}>
            <Text style={styles.heading}>Metcon</Text>
            <Text style={styles.text}>{rWod.metcon.movement}</Text>
            <Text style={styles.reps}>{rWod.metcon.repScheme}</Text>
            <Text style={styles.reps}>{rWod.metcon.weight}</Text>
          </View>
        </View>

        <View style={styles.one}>
          <View style={styles.finisher}>
            <Text style={styles.heading}>Finisher</Text>
            <Text style={styles.text}>{rWod.finisher.movement}</Text>
          </View>
        </View>       
     </ScrollView>
   </View> 
   <FAB 
                    buttonColor="#8fbc8f" 
                    iconTextColor="#FFFFFF"
                    onClickAction={newRwod} 
                    visible={true} 
                    iconTextComponent={<Feather name="shuffle" size={24} color="black" />}
                    />
</View>
    )
}



const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',  
  },
inner: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#3a3b3a',
    borderRadius: 5,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    marginTop: 30, 
    paddingLeft: 5,
    paddingRight: 5,
    width: 400,
  },
title: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 10,
    padding: 20
  },

power: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginLeft: 10,
    padding: 15
    
  },

strength: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginLeft: 10,
    padding: 15
  },

accesory: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginLeft: 10,
    padding: 15
  },

metcon: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginLeft: 10,
    padding: 15
  },

finisher: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginLeft: 10,
    padding: 15,
    paddingBottom: 20,
  },

heading: {
    color: '#8fbc8f',
    fontWeight: 'normal',
    fontSize: 12, 
  },
text: {
    fontWeight: 'normal',
    color: 'white',
    fontSize: 21,
    marginTop: 3
  },
reps: {
    fontWeight: '600',
    color: '#d3d3d3',
    marginTop: 3,
    marginBottom: 10
  },
one: {
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    elevation: 10,
    marginTop: 3,
    shadowColor: "#8fbc8f"
  },
shuffle: {
    backgroundColor: '#DDDDDD',
    opacity: .7,
    alignSelf: 'center',
    padding: 10,
  }
})

export default workoutScreen