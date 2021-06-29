import React from 'react';
import { ScrollView, StyleSheet, View} from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {

  return (
     <ScrollView>
        <View style={styles.screen}>
          <Header title='CHECK PRIME'/>
          <StartGameScreen/>
        </View>
     </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
