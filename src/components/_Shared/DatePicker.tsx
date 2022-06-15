import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Platform, Keyboard, TextInput } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

interface PropsDateType {
    onChange?: any;
    date?: any;
    label?: string;
    onBlur?: any;
}

const DateYears: React.FC<PropsDateType> = ({onChange, date, label, onBlur}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date: Date) => {
      hideDatePicker();
      onChange(moment(date).format('L'));
    };
    
    
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={{width: '85%'}}>
          <Text style={styles.textStyle}>{label}</Text>
        </View>
        <View style={styles.styleSubmit}>
          <TextInput value={date} onPressIn={showDatePicker} placeholder="Entrez la date" onBlur={onBlur}/>
        </View>
      {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
      <View>

      <DateTimePickerModal
        onChange={() => onChange}
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      </View>
      </View>
    </SafeAreaView>
  );
};

export default DateYears;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  datePickerStyle: {
    width: "100%",
    marginTop: 20,
  },
  styleSubmit: {
    height: 40,
       width: "85%",
       borderWidth: 1,
       borderRadius: 10,
       backgroundColor: '#dfe4ea',
       marginBottom: 4,
       paddingHorizontal: 10,
       justifyContent: "center",
    
},
textStyle: {
  color: 'black',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '75%',
}
});