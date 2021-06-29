import React, { useState } from 'react';
import { Text,View,StyleSheet,TouchableWithoutFeedback,Keyboard,Alert } from 'react-native';
import Card from '../components/Card';
import Number from '../components/Number';

const StartGameScreen = (props) => {

    const [number, setnumber] = useState('');

    const [final, setfinal] = useState(null);

    const [message, setmessage] = useState('');

    const numberHandler = (number) => {
        setnumber(number.replace(/[^0-9]/g,''));
    }

    const clearNumber = () => {
        setnumber('');
    }

    const confirmHandler = () => {
        const num = parseInt(number);
        if(isNaN(num) || num<=0 || num>=99){
            Alert.alert('INVALID NUMBER !!!!',
            'NUMBER HAS TO BE BETWEEN 1 TO 99',
            [{text:'OKAY',style:'destructive',onPress:clearNumber}])
        }else{
            setfinal(num);
            Keyboard.dismiss();
            setnumber('');
            const msg = 'YOUR SELECTED NUMBER '+ num;
            setmessage(msg);
        }
    }

    const startGame = () => {
        setfinal(null);
    }

    return  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.screen}>
                    <Text style={styles.title}>Start A New Game!</Text>
                    <Card number={number} numberHandler={numberHandler} clearNumber={clearNumber} confirmHandler={confirmHandler}/> 
                </View>
            </TouchableWithoutFeedback>
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    title:{
        fontSize:20,
        marginVertical:40
    }
})

export default StartGameScreen;