import { StyleSheet, View} from 'react-native';
import React from 'react';

import Signin from './Components/Signin';
import Signup from './Components/Register';



const App = () => {
  
  return (
    <View style={{flex:1}}>
      <Signup/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
});