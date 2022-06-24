import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

interface BtnPropsType {
    style?: any,
    stylebtn?: any,
    HandleNavigation: () => void,
    title: string
}

const BtnRevenusDepense: React.FC<BtnPropsType>= ({HandleNavigation, style,stylebtn,title }) => {
  return (
    <TouchableOpacity onPress={HandleNavigation} style={stylebtn}>
      <Text style={style}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BtnRevenusDepense;

const styles = StyleSheet.create({

});
