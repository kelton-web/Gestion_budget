import SelectDropdown from 'react-native-select-dropdown';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Data from '../../assets/data/data.json';



interface DropdownProps {
    label?: string;
    value?: string;
    onSelect: (categorie: string) => void;
    countriesArray: string[] ;
}

const pickerPerso: React.FC<DropdownProps> = ({value,label, onSelect, countriesArray}) => {
  
  
  const ArraySelect: string[] = countriesArray;
  return (
    <View style={styles.selectDropdownStyle}>
        <Text style={styles.textStyle}>{label}</Text>
        <SelectDropdown
          defaultButtonText="Choississez votre compte"
          buttonStyle={styles.DropdownStyle}
          data={ArraySelect}
          onSelect={onSelect}
          buttonTextAfterSelection={(value, index) => {
            return value;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
    </View>
  );
};
const styles = StyleSheet.create({
    selectDropdownStyle: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    DropdownStyle: {
        borderWidth: 1,
        backgroundColor: 'transparent',
        width: '45%',
        borderRadius: 10,
        height: 35,
       
    },
    textStyle: {
      color: 'black',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '75%',
    }
})


export default pickerPerso;
