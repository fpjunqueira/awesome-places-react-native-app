import React, {Component} from 'react';
import {Platform, StyleSheet, View, TextInput, Button, Text} from 'react-native';

import ListeItem from './src/components/ListItem/ListItem';

/**
 * Platform Component Example
 */
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  state = {
    placeName: '',
    places: []
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName),
        placeName: ''
      }
    });
  };
  
  render() {
    const placesOutput = this.state.places.map((place, index) => (
      <ListeItem 
        placeName={place}
        key={index}/>
    ));

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>        
          <TextInput 
            placeholder="An awesome place"
            value={this.state.placeName} 
            onChangeText={this.placeNameChangeHandler}
            style={styles.placeInput}/>
          <Button 
            title="Add"
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}/>
        </View>
        <View style={styles.listContainer}>
          {placesOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }, 
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});
