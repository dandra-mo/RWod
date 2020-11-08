import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import getRWod from './Workouts';
import { useTimer } from './utils/timer'

const timeFormatter = (ms, format) => {
  const constant = 3600000
  let hr = Math.floor(ms / constant)
  let min = Math.floor((ms % constant) / 60000)
  let sec = Math.floor(((ms % 360000) % 60000 ) / 1000)
  
  if (hr < 10) { hr = '0' + hr }
  if (min < 10) { min = '0' + min }
  if (sec < 10) { sec = '0' + sec }
  if (!hr) { hr = '00' }

  if (format != null) {
    var formatted_time = format.replace('hh', hr)
    formatted_time = formatted_time.replace('h', hr*1+'')
    formatted_time  = formatted_time.replace('mm', min)
    formatted_time = formatted_time.replace('m', min*1+'')
    formatted_time = formatted_time.replace('ss', sec)
    formatted_time = formatted_time.replace('s', sec*1+'')
    return formatted_time 
  } else {
  return hr + ':' + min + ':' + sec
  }
}

export default function App() {
  const [rWod, setRwod] = useState(getRWod()) 
  const { time, setTime, setPlay, play } = useTimer()
  const newRwod = () => setRwod(getRWod()) 
  // const Rwod = getRWod()
  return (
    <View style={styles.container}>
      <ScrollView>
        
        <View style={styles.inner}>
          <View style={styles.title}>
            <Text style={styles.text}>Today's Wod</Text>
          </View>


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
        </View>
      </ScrollView>

  <View style={styles.button}>
     <View>
        <Button
          onPress={newRwod}
          title='Shuffle'
          color='black'

          accessibilityLabel='Shuffle workouts to get new one'
          />
     </View>
      
      <View>
        <Button
          onPress={() => setTime(0)}
          title='Reset'
          color='black'
        />
        <Button
          onPress={() => setPlay(!play)}
          title='Start / Pause'
          color='black'
        />
        <View>
          <Text style={styles.timer}>{timeFormatter(time)}</Text>
        </View>
      </View>
    </View>
  </View>
 
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'space-around',  
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
    marginBottom: 10,
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
    paddingBottom: 250,
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
  button: {
    position: 'absolute',
    bottom: 0,
    left: 5,
    right: 5,
    backgroundColor: 'black',
    opacity: .7,
    alignSelf: 'stretch',
    height: 200,
  },
  timer: {
    fontSize: 80,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white'
  },
  one: {
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    elevation: 10,
    marginTop: 3,
    shadowColor: "#8fbc8f"

  },
  
});
