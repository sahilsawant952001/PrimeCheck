import React from 'react';
import { Text,View,StyleSheet } from 'react-native';
import Card from '../components/Card';

const StartGameScreen = (props) => {

    const [number, setnumber] = useState('');

    const valueHandler = (number) => {
        setnumber(number.replace(/[^0-9]/g,''))
    }
    return  <View style={styles.screen}>
                <Text style={styles.title}>Start A New Game!</Text>
                <Card number={number} valueHandler={valueHandler}/>
            </View>
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