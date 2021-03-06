import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { primary,asscent } from '../constants/Colors';
import Input from './Input';

const Card = (props) => {
    return  <View style={styles.inputContainer}>
                <Text style={styles.heading}>SELECT A NUMBER</Text>
                <Input number={props.number} numberHandler={props.numberHandler} style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='number-pad' maxLength={5} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button1}>
                        <Button title='CLEAR' color={asscent} onPress={props.clearNumber}/>
                    </View>
                    <View style={styles.button2}>
                        <Button title='SELECT' color={primary} onPress={props.confirmHandler}/>
                    </View>
                </View>
            </View>
            
}

const styles = StyleSheet.create({
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
    input:{
        width:'100%',
        textAlign:'center'
    },
    
})

export default Card;