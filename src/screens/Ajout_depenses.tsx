import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputAjoutRevenus from '../components/Tasks/formAjoutRevenus';
import { RouteNavigation } from '../interfaces/index';


const Ajout_depenses: React.FC<RouteNavigation> = (props : any) => {
  const countriesDepenses = ['Alimentaires', 'Factures', 'Transport', 'Logement', 'Santé', 'Divertissement', 'Vacances', 'Shopping', 'Autres'];
  return (
    <View>
      <InputAjoutRevenus navigation={props.navigation} countries={countriesDepenses}/>
    </View>
  )
}

export default Ajout_depenses

const styles = StyleSheet.create({})



