import React, { useState } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { useTimer } from './utils/timer'
import FAB from 'react-native-fab'

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

export default function Timer() {
  const { time, setTime, setPlay, play } = useTimer()

    return (
    <View style={styles.container}>
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

        <View style={styles.timerFab}>
            <FAB 
                buttonColor="#8fbc8f" 
                iconTextColor="#FFFFFF" 
                visible={true}     
                />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    timer: {
        fontSize: 80,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'black'
  },
  timerFab: {
      position: 'absolute',
      bottom: 20,
      left: 5,
      right: 0
  }
})