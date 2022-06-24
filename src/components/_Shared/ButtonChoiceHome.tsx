import { Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react'

interface PropsButton {
    title?: string,
    onPress?: () => void
}

const ButtonChoiceHome: React.FC<PropsButton> = ({title, onPress}) => {
  return (
    <View>
      <View>
        <Pressable style={({ pressed }) =>[{backgroundColor: pressed ? "#ecf0f1" : "transparent"},styles.btnSubmit]} onPress={onPress}>
            <Text style={styles.textStyle}>{title}</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ButtonChoiceHome

const styles = StyleSheet.create({
    textStyle: {
        color: '#000',
        fontSize: 14,
        fontWeight: '500',
    },
    btnSubmit: {
      paddingVertical: 10,
      paddingHorizontal: 30,
      marginHorizontal: 10,
    }
})