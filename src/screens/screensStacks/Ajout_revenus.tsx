import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputAjoutRevenus from '../../components/Tasks/TasksAccueil/formAjoutRevenus';
import { RouteNavigation } from '../../interfaces/index';
import { countriesRevenus } from '../../interfaces/types/dataCategorie';


const Ajout_revenus: React.FC<RouteNavigation> = (props : any) => {
  return (
    <View>
      <InputAjoutRevenus navigation={props.navigation} countries={countriesRevenus}/>
    </View>
  )
}

export default Ajout_revenus

const styles = StyleSheet.create({})