import React, { useState } from 'react';
import { Text,View,StyleSheet,TouchableWithoutFeedback,Keyboard,Alert } from 'react-native';
import Card from '../components/Card';
import Number from '../components/Number';

function isPrime(n) {
              
    var i, flag = true;
    
    for(i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
        }
          
    if (flag == true)
        return true;
    else
        return false;
}

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
        if(isNaN(num)){
            Alert.alert('INVALID NUMBER !!!!',
            'ENTER VALID NUMBER',
            [{text:'OKAY',style:'destructive',onPress:clearNumber}])
        }else{
            setfinal(num);
            const msg = 'YOUR SELECTED NUMBER '+ number;
            Keyboard.dismiss();
            setnumber('');
            setmessage(msg);
        }
    }

    const startGame = () => {
        if(isPrime(final)){
            Alert.alert('PRIME',final+' IS PRIME NUMBER',
            [{text:'OKAY',style:'destructive',onPress:cancleGame}])
        }else{
            Alert.alert('NON PRIME',final+' IS NOT PRIME NUMBER',
            [{text:'OKAY',style:'destructive',onPress:cancleGame}])
        }
    }

    const cancleGame = () => {
        setfinal(null);
    }

    return  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.screen}>
                    <Text style={styles.title}>CALCULATOR TO CHECK PRIME NUMBER</Text>
                    {final!==null ? <Number number={final} startGame={startGame} cancleGame={cancleGame}/>:<Card number={number} numberHandler={numberHandler} clearNumber={clearNumber} confirmHandler={confirmHandler}/>}
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
        marginVertical:40,
        textAlign:'center'
    }
})

export default StartGameScreen;