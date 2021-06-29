import React from 'react';
import { TextInput,StyleSheet } from 'react-native';

const Input = (props) => {
    return  <TextInput {...props} style={{...props.style,...styles.input}} value={number} onChangeText={valueHandler}/>
}

const styles = StyleSheet.create({
    input:{
        height:30,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        marginVertical:30
    }
})

export default Input;