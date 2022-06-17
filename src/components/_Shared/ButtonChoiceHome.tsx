import { Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react'

interface PropsButton {
    title?: string,
}

const ButtonChoiceHome: React.FC<PropsButton> = ({title}) => {
  return (
    <View>
      <View>
        <Pressable>
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
    }
})