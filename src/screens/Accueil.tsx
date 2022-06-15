import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteNavigation } from '../interfaces';

interface AccueilType {

}

const Accueil: React.FC<AccueilType> = ({}) => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteNavigation>>();
  return (
    <View style={styles.containerAccueil}>
      <TouchableOpacity onPress={() => navigation.navigate('Ajout_revenus')} style={styles.btnRevenus}>
        <Text>Ajout revenus</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Ajout_depenses')} style={styles.btnDepenses}>
        <Text>Ajout depenses</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Accueil

const styles = StyleSheet.create({
    containerAccueil: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: "row",
        top: "4%",
    },
    btnRevenus: {
      borderWidth: 1,
      paddingHorizontal: "4%",
      paddingVertical: "3%",
      borderRadius: 15,
      backgroundColor: "gray",
      marginHorizontal: 5,
      height: "10%",
    },
    btnDepenses: {
      borderWidth: 1,
      height: "10%",
      paddingHorizontal: "3%",
      paddingVertical: "3%",
      borderRadius: 15,
      backgroundColor: "gray",
      marginHorizontal: 5
    }
})