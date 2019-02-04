import React from 'react';
import { View, StyleSheet } from 'react-native';

import ListeItem from '../ListItem/ListItem';

const placeList = props => {
    const placesOutput = props.places.map((place, index) => (
        <ListeItem 
          placeName={place}
          key={index}/>
      ));

    return (
        <View style={styles.listContainer}>
            {placesOutput}
        </View>
    );
};

const styles = StyleSheet.create({    
    listContainer: {
        width: "100%"
    }
});

export default placeList;