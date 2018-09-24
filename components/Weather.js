import React from 'react';
import { StyleSheet, Text, View, ImageBackground  } from 'react-native';
import Forecast from './Forcast';

export default class Weather extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          forecast: {
              main: '-', description: '-', temp: 0
          }
      }
  }
  
  render() {
    return (
      <View style={styles.container}>
            <ImageBackground source={require('../pic.jpg')} style={styles.backdrop}>
                <View style={styles.textcontainer}>
                    <Text>Zip code is {this.props.zipCode}.</Text>
                    <Forecast {...this.state.forecast}/>
                </View>
            </ImageBackground>
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
