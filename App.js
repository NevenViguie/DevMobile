import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Button, Alert, SafeAreaView, Platform, View, Dimensions } from 'react-native';
import Confinement from './Confinement';



export default function App() {
  return <Confinement style={styles.container} />;
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS==="android" ? StatusBar.currentHeight : 0
  },
});
