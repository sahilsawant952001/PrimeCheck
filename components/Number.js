import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { primary } from '../constants/Colors';

const Number = (props) => {
    return  <View style={styles.inputContainer}>
                <Text>{props.number}</Text>
                <Button onPress={props.startGame} color={primary}/>
            </View>
}

const styles = StyleSheet.create({
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.56,
        elevation:5,
        backgroundColor:'#ffffff',
        padding:40,
        borderRadius:10
    }
})

export default Number;