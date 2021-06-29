import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { asscent, primary } from '../constants/Colors';

const Number = (props) => {
    return  <View style={styles.inputContainer}>
                <Text style={styles.text1}>YOU SELECTED</Text>
                <Text style={styles.text2}>{props.number}</Text>
                <View style={styles.buttonContainer}>
                    <View style={styles.button1}>
                        <Button title='CANCLE' onPress={props.cancleGame} color={asscent}/>
                    </View>
                    <View style={styles.button2}>
                        <Button title='CHECK' onPress={props.startGame} color={primary}/>
                    </View>
                </View>
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
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:10
    },
    button1:{
        width:'50%',
        marginRight:5
    },
    button2:{
        width:'50%',
        marginLeft:5
    },
    text1:{
        marginBottom:20
    },
    text2:{
        marginBottom:20
    }
})

export default Number;