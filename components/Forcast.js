import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
  
  
    render() {
      return (
        <View style={styles.container}>
          <Text>{this.props.main}</Text>
          <Text>{this.props.description}</Text>
          <Text>{this.props.temp}</Text>
          <View style={styles.textcontainer}>
          <Text>ํC</Text>
          </View>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: { paddingTop: 25 ,
                    backgroundColor: '#AAFF00'  },
    textcontainer: { 
                          flexDirection: 'row',
                          justifyContent: 'center'},
      blankcontainer: {flex : 1, 
                         backgroundColor: '#FFFF00' },                     
    backdrop: { width: '100%', height: '100%'},
  });
  