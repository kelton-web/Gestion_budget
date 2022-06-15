import SelectDropdown from 'react-native-select-dropdown';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DropdownProps {
    label?: string;
    value?: string;
    onSelect: (categorie: string, index: number) => void;
    countriesArray: string[];
}

const SelectDropdownPicker: React.FC<DropdownProps> = ({label, onSelect, countriesArray}) => {
  const countries = countriesArray;
  return (
    <View style={styles.selectDropdownStyle}>
        <Text style={styles.textStyle}>{label}</Text>
        <SelectDropdown
          buttonStyle={styles.DropdownStyle}
          data={countries}
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
        backgroundColor: '#dfe4ea',
        width: '75%',
        borderRadius: 10,
        height: 41

    },
    textStyle: {
      color: 'black',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '75%',
    }
})


export default SelectDropdownPicker;
