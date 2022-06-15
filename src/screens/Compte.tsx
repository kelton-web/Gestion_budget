import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react'
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteNavigation } from '../interfaces';

const Compte: React.FC<RouteNavigation> = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteNavigation>>()
  const route = useRoute<RouteProp<RouteNavigation>>();
  console.log(route.params?.name)
  console.log(route.params?.montant)
  return (
    <View>
      <Text>Prénom: {route.params?.name}</Text>
      <Text>Nom: {route.params?.lastname}</Text>
      <Text>Montant: {route.params?.montant}</Text>
      <Text>Category: {route.params?.category}</Text>
      <Text>Commentaire: {route.params?.commentaire}</Text>
      <Text>Date: {route.params?.date.toString()}</Text>
      
    </View>
  )
}

export default Compte

const styles = StyleSheet.create({})