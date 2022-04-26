import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default function App() {
  return (
    // every view by default uses flex box
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>1</Text>
      </View>
      <View style={styles.box2}>
        <Text>2</Text>
      </View>
      <View style={styles.box3}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    // by default arranged in columns
    flexDirection: 'row',
    width: '80%',
    height: 300,
    // by default align items are set to stretch on cross-axis if row
  },
  box1: {
    // flex property is applied only to child of flex container
    backgroundColor: 'red',
    // width: 100,
    // height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    backgroundColor: 'blue',
    // will take 2x space as the first one
    flex: 2,
    // width: 100,
    // height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box3: {
    backgroundColor: 'green',
    // will take 3x space as the first one
    flex: 3,
    // width: 100,
    // height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
