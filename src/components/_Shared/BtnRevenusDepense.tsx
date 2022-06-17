import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

interface BtnPropsType {
    style?: any,
    stylebtn?: any,
    HandleNavigation: () => void,
}

const BtnRevenusDepense: React.FC<BtnPropsType>= ({HandleNavigation, style,stylebtn }) => {
  return (
    <TouchableOpacity onPress={HandleNavigation} style={stylebtn}>
      <Text style={style}>Ajout revenus</Text>
    </TouchableOpacity>
  );
};

export default BtnRevenusDepense;

const styles = StyleSheet.create({

});
