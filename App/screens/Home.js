
import React from 'react'
import { View, StyleSheet, StatusBar, Image, Dimensions, Text, Alert} from 'react-native'
import {format} from 'date-fns'
import colors from '../constants/colors';

import { ConversionInput } from '../components/ConversionInput'
import {Button} from '../components/Button'

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        flex: 1,
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    logoBackground:{
        width: screen.width * 0.45,
        height: screen.width * 0.45, // 45% of the screen width

    },
    logo: {
        position: 'absolute',
        width: screen.width * 0.25,
        height: screen.width * 0.25, // 25% of the screen width

    },
    textHeader: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20
    },
    text: {
        fontSize: 14,
        color: colors.white,
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 10,
    }
  })

export default () => {
    const baseCurrency = 'USD';
    const quoteCurrency = 'GBP';
    const conversionRate = 0.89824;
    const date = '2021-06-16';
 return (
   <View style={styles.container}>
     <StatusBar barStyle='light-content' backgroundColor={colors.blue} />
     <View style={styles.logoContainer}>
       <Image 
         source={require("../assets/images/background.png")} 
         style={styles.logoBackground} 
         resizeMode="contain"
       />
       <Image 
         source={require("../assets/images/logo.png")} 
         style={styles.logo} 
         resizeMode="contain" 
       />
     </View>
     <Text style={styles.textHeader}>Currency Converter</Text>
     <View style={styles.inputContainer}>

     
       <ConversionInput
         text={baseCurrency}
         value="123"
         onButtonPress={()=> alert("todo")}
         keyboardType="numeric"
         onChangeText={(text) => console.log('text', text)}
       />
     </View>
     <ConversionInput
       text={quoteCurrency}
       value="123"
       onButtonPress={()=> alert("todo")}
       editable={false}
     />
     <Text style={styles.text}>
       {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(new Date(date),'MMM do yyyy')}`}
     </Text>
     <Button 
       text="Reverse Currencies"
       onPress={()=> Alert.alert('todo')}

     />
   </View>
);
}
    
