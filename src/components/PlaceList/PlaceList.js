import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListeItem from '../ListItem/ListItem';

const placeList = props => {
    return (
        <FlatList 
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => (
                <ListeItem 
                    placeName={info.item.name}
                    placeImage={info.item.image}
                    onItemPressed={() => props.onItemDeleted(info.item.key)}                    
                />
            )}/>
    );
};

const styles = StyleSheet.create({    
    listContainer: {
        width: "100%"
    }
});

export default placeList;