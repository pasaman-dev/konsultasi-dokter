import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ILLogo from './assets/ilustrations';


const App = () => {
  return (
    <View>
      <ILLogo />
      <Text style={styles.judul}>My Doctor</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  judul: {
    fontSize: 20,
    fontWeight: 600,
    color: '#112340',
    marginTop: 20
  },
  bungkus: {
    backgroundColor: 'yellow',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})