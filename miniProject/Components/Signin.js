import React from "react";
import { useTranslation } from "react-i18next";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
 
} from "react-native";
import Hoc from "./Hoc";


 function Login(props) {
    const {t} = useTranslation();
    const{changeLanguage,changeLanguageback} = props
return(
    <View >
        <Text style={{fontSize:20,color:"red"}}>{t('header')}</Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>changeLanguage()}>
            <Text style={styles.buttonTextStyle}>Click</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>changeLanguageback()}>
            <Text style={styles.buttonTextStyle}>BackTo</Text>
        </TouchableOpacity>
    </View>
)
}
export default Hoc(Login)
const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor:"red",
        borderWidth: 0,
        color:"white",
        borderColor: '#7DE24E',
        height: 50,
        alignItems: 'center',
        borderRadius: 25,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
      },
      buttonTextStyle: {
        color: "white",
        paddingVertical: 10,
        fontSize: 16,
      },
      buttonTextStyle2: {
        color:"white",
        paddingVertical: 10,
        fontSize: 16,
        marginLeft: 45,
      },
});