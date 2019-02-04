import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const placeDetail = props => {
    let modalContent = null;

    if (props.place) {
        modalContent = (
            <View>
                <Image source={props.place.image} style={styles.placeImage}/>
                <Text style={styles.placeName}>{props.place.name}</Text>
            </View>
        );
    }

    return(
        <Modal 
            onRequestClose={props.onModalClosed}
            visible={props.place !== null} 
            animationType="slide">
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title="Delete" color="red" onPress={props.onItemDeleted}/>
                    <Button title="Close" onPress={props.onModalClosed}/>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    }
});

export default placeDetail;