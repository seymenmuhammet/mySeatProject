//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BookMySeat from './src/BookMySeat';
// create a component
const MyComponent = () => {
  return <BookMySeat />;
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default MyComponent;
