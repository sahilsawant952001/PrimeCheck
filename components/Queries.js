import React from 'react';
import { ScrollView, Text,View,StyleSheet } from 'react-native';
import { primary } from '../constants/Colors';

const Queries = (props) => {
    const queries = props.queries;

    return  <View style={styles.view}>
                <Text style={styles.title}>PAST QUERIES</Text>
                {queries.map((item,index) => <View style={styles.query}><Text key={index}><Text style={styles.number}>{item.number}</Text> : {item.result}</Text></View>)}
                {queries.length===0 && <Text style={styles.txt}>NO PAST QUERIES</Text>}
            </View>
}

const styles = StyleSheet.create({
    query:{
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
        borderRadius:10,
        marginVertical:15,
        fontWeight:'bold'
    },
    title:{
        marginVertical:30,
        fontWeight:'bold',
        textAlign:'center'
    },
    txt:{
        textAlign:'center'
    },
    number:{
        color:primary
    },
    view:{
        flex:1
    }
})

export default Queries;