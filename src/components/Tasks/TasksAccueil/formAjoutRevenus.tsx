

 import React, { useState } from 'react';
 import { Button, TextInput, View, StyleSheet, Text, Keyboard, ScrollView } from 'react-native';
 import { Formik } from 'formik';
 import * as yup from 'yup';
import InputAll from '../../_Shared/InputAll';
import moment from 'moment';
import SelectDropdownPicker from '../../_Shared/Dropdown';
import DateYears from '../../_Shared/DatePicker';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteNavigation } from '../../../interfaces/index';


interface FormType {
  navigation: any;
  countries: string[];
}

const champsInputs = yup.object().shape({
  name: yup.string().required("Entrez votre prénom"),
  lastname: yup.string().required("Entrez votre nom"),
  categorie: yup.string().required("Choississez une categorie"),
  montant: yup.number().required("Entrez un montant valid").positive().integer(),
  commentaires: yup.string().required("Entrez un commentaire"),
  date:yup.date()
  .nullable()
  .transform((curr, orig) => orig === '' ? null : curr)
  .required('Entrez une date valid')
});

/* const champsSubmit = () => {
  navigation.navigate('Compte')
}; */

const InputAjoutRevenus: React.FC<FormType> = ({navigation, countries}) => (
  
  <View style={styles.containerFormStyle}>
   <Formik 
     initialValues={{ name: '', lastname: '', montant: '', categorie: '', commentaires: '', date: '',}}
     validateOnMount={true}
     onSubmit={(values) => navigation.navigate('Compte', {
      name: values.name,
      lastname: values.lastname,
      montant: values.montant,
      category: values.categorie,
      commentaire: values.commentaires,
      date: values.date,
    })}
     validationSchema={champsInputs}
   >
     {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
       <ScrollView>
         <InputAll
           onChangeText={handleChange('name')}
           onBlur={handleBlur('name')}
           value={values.name}
           style={styles.inputStyle}
           label='Prénom'
           placeholder="Entrez votre prénom"
         />
         {(errors.name && touched.name) &&
             <Text style={styles.errorStyle}>{errors.name}</Text>
          }
         <InputAll
           onChangeText={handleChange('lastname')}
           onBlur={handleBlur('lastname')}
           value={values.lastname}
           style={styles.inputStyle}
           label='Nom'
           placeholder="Entrez votre nom"
         />
         {(errors.lastname && touched.lastname) &&
             <Text style={styles.errorStyle}>{errors.lastname}</Text>
          }
         
         <SelectDropdownPicker 
            value={values.categorie} 
            label='Catégorie'
            onSelect={handleChange('categorie')} 
            countriesArray={countries}/>
          {(errors.categorie && touched.categorie) &&
            <Text style={styles.errorStyle}>{errors.categorie}</Text>
         }
         <InputAll
           onChangeText={handleChange('montant')}
           onBlur={handleBlur('montant')}
           value={values.montant}
           style={styles.inputStyle}
           keyboardType="numeric"
           label='Montant'
           placeholder="Quelle est votre montant"
         />
          {(errors.montant && touched.montant) &&
             <Text style={styles.errorStyle}>{errors.montant}</Text>
          }
         <InputAll
           onChangeText={handleChange('commentaires')}
           onBlur={handleBlur('commentaires')}
           value={values.commentaires}
           style={styles.inputStyle}
           label='Commentaires'
           placeholder="Laisser un commentaires"
         />
          {(errors.commentaires && touched.commentaires) &&
             <Text style={styles.errorStyle}>{errors.commentaires}</Text>
          }
    
         <DateYears date={values.date} onChange={handleChange('date')} label='Date' onBlur={handleBlur('date')} />
          {(errors.date && touched.date) &&
             <Text style={styles.errorStyle}>{errors.date}</Text>
          }

         <Button disabled={!isValid} onPress={() => handleSubmit()} title="Submit"  />
       </ScrollView>
     )}
   </Formik>
  </View>
 );


export default InputAjoutRevenus;

const styles = StyleSheet.create({
  containerFormStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  inputStyle: {
    height: 40,
    width: "75%",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#dfe4ea',
    marginBottom: 4,
    paddingHorizontal: 10,
    },
  errorStyle: {
    color: "red",
    fontSize: 14,
    width: "100%",
    textAlign: "center",
    }
})