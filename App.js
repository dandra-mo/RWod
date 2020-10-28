import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import getRWod from './Workouts';



export default function App() {
  const [rWod, setRwod] = useState(getRWod()) 
  const newRwod = () => setRwod(getRWod()) 
  // const Rwod = getRWod()
  return (
    <View style={styles.container}>
     <ImageBackground source={require('/Users/dandramoss/Code/my-app/assets/appPic.jpg')} style={styles.image}>

     <View style={styles.inner}>
       <View style={styles.power}>
        <Text style={styles.heading}>Power</Text>
        <Text style={styles.text}>{rWod.power.movement}</Text>
        <Text style={styles.text}>{rWod.power.repScheme}</Text>
    
       <View style={styles.strength}> 
        <Text style={styles.heading}>Strength</Text>
        <Text style={styles.text}>{rWod.strength.movement}</Text>
        <Text style={styles.text}>{rWod.strength.repScheme}</Text>
    
       <View style={styles.accesory}>
        <Text style={styles.heading}>Accessory</Text>
        <Text style={styles.text}>{rWod.superSet.movement1}</Text>
        <Text style={styles.text}>{rWod.superSet.repScheme1}</Text>
    
        <Text style={styles.text}>{rWod.superSet.movement2}</Text>
        <Text style={styles.text}>{rWod.superSet.repScheme2}</Text>
    
       <View style={styles.metcon}>
        <Text style={styles.heading}>Metcon</Text>
        <Text style={styles.text}>{rWod.metcon.movement}</Text>
        <Text style={styles.text}>{rWod.metcon.repScheme}</Text>
        <Text style={styles.text}>{rWod.metcon.weight}</Text>
    
       <View style={styles.finisher}>
        <Text style={styles.heading}>Finisher</Text>
        <Text style={styles.text}>{rWod.finisher.movement}</Text>
    

      <View>
       <StatusBar style="auto" />
       <Button 
        onPress={newRwod}
        title='Shuffle'
        color='black'
        accessibilityLabel='Shuffle workouts to get new one'
        style={styles.button}
        />
         </View>
        </View>
       </View>
      </View>
     </View>
    </View>
   </View>
  </ImageBackground>
 </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
    justifyContent: 'space-around',
    
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    
    alignContent: 'stretch',
  },

  inner: {
    flex: 1,
    backgroundColor: '#778899',
    opacity: .9,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 80,
    paddingLeft: 10,
    paddingRight: 10,
  },

  power: {
    flex: 1,
    alignItems: 'center',
    
    justifyContent: 'flex-start',
    marginTop: 10,
    
  },

  strength: {
    flex: 1,
    alignItems: 'center',
    
    justifyContent: 'flex-start',
    marginTop: 10,
  },

  accesory: {
    flex: 2,
    alignItems: 'center',
    
    justifyContent: 'flex-start',
    marginTop: 10,
  },

  metcon: {
    flex: 1,
    alignItems: 'center',
    
    justifyContent: 'flex-start',
    marginTop: 10,
  },

  finisher: {
    flex: 1,
    alignItems: 'center',
    
    justifyContent: 'flex-start',
    marginTop: 10,
  },

  heading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    fontWeight: '600',
  },
  button: {
    marginBottom: 1,
    marginTop: 20,
  },
});
