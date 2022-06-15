import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputAjoutRevenus from '../components/Tasks/formAjoutRevenus';
import { RouteNavigation } from '../interfaces/index';


const Ajout_revenus: React.FC<RouteNavigation> = (props : any) => {
  const countriesRevenus = ['Salaire et assimilé', 'Revenu financier', 'Rente', 'Pension alimentaire', 'Allocation chômage', 'Prestations sociales', 'Revenu foncier', 'Revenu exceptionnel', 'Autre revenu'];
  return (
    <View>
      <InputAjoutRevenus navigation={props.navigation} countries={countriesRevenus}/>
    </View>
  )
}

export default Ajout_revenus

const styles = StyleSheet.create({})