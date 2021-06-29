import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { white,primary } from '../constants/Colors';

const Header = (props) => {
    return  <View style={styles.header}>
                <Text style={styles.headerTitle}>
                    {props.title}
                </Text>
            </View>
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:90,
        paddingTop:36,
        backgroundColor:primary,
        alignItems:'center'
    },
    headerTitle:{
        fontSize:18,
        color:white
    }
})

export default Header;