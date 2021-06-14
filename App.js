import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  const [outputText,setoutputText]=useState('Open up App.js to start working on your app!')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Text>Hello</Text>
      <StatusBar style="auto" />
      <Button color="#d3d3d3" title="change text" onPress={()=>setoutputText('Text changed')}/>
      <Button title="change text" onPress={()=>setoutputText('Open up App.js to start working on your app!')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
