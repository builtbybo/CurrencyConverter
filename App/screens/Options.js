import React from 'react'
import { SafeAreaView, ScrollView, Linking, Alert } from 'react-native' 
import { Entypo } from '@expo/vector-icons'

import colors from '../constants/colors';
import { RowItem, RowSeparator } from '../components/RowItem';

const openURL = (url) => {
    return Linking.openURL(url).catch(()=> {
        Alert.alert("Sorry, something went wrong","Please try again later")
    })
}
export default () => {
    return ( 
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <RowItem 
            onPress={()=> openURL('https://www.builtbybo.dev')}
            text="Themes"
            rightIcon={<Entypo name="chevron-right" size={20} color={colors.blue} />}
          />
        
          <RowSeparator />

          <RowItem 
            onPress={()=> alert("to do!")}
            text="React Native Basics"
            rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          />
          <RowSeparator />


          <RowItem 
            onPress={()=> alert("to do!")}
            text="React Native By Example"
            rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          />
          <RowSeparator />

         
        </ScrollView>

      </SafeAreaView>
    )
    }