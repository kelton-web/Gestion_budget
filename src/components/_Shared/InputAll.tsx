import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { ReactNode } from 'react'

interface StockTypes {
    onChangeText: (value: string) => void;
    onBlur: any;
    value: string;
    style: any;
    label?: string;
    placeholder?: string;
    keyboardType?: any;
}

const InputAll: React.FC<StockTypes> = ({label,...props}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>{label}</Text>
       <TextInput
        {...props}
        
         />
    </View>
  )
}

export default InputAll

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center' 
    },
    textStyle: {
      color: 'black',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '75%',
    }
})