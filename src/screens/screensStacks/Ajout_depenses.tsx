import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputAjoutRevenus from '../../components/Tasks/TasksAccueil/formAjoutRevenus';
import { RouteNavigation } from '../../interfaces/index';
import { countriesDepenses } from '../../interfaces/types/dataCategorie';


const Ajout_depenses: React.FC<RouteNavigation> = (props : any) => {
  return (
    <View>
      <InputAjoutRevenus navigation={props.navigation} countries={countriesDepenses} title="Expenses"/>
    </View>
  )
}

export default Ajout_depenses

const styles = StyleSheet.create({})



