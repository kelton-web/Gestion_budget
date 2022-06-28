

 import React, { useState, useEffect } from 'react';
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
import Realm from "realm";
import {UUID, ObjectId} from 'bson'
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'
import { IObjet, IncomesType, ExpensesType } from '../TasksCompte/RealmDataBase'


interface FormType {
  navigation: any;
  countries: string[];
  title: string;
}
interface ValueNavigation {
      name: string,
      amount: number,
      category: string,
      comments: string,
      date: Date,
}

const champsInputs = yup.object().shape({
  name: yup.string().required("Entrez votre prénom"),
  category: yup.string().required("Choississez une categorie"),
  amount: yup.number().required("Entrez un montant valid").positive().integer(),
  comments: yup.string().required("Entrez un commentaire"),
  date:yup.date()
  .nullable()
  .transform((curr, orig) => orig === '' ? null : curr)
  .required('Entrez une date valid')
});

/* const champsSubmit = () => {
  navigation.navigate('Compte')
}; */
/* const User = {
  name: "User",
  primaryKey: "_id",
  properties: {
    _id: "int",
    Incomes: "Incomes",
    Expenses: "Expenses"
  }
} 
const Expenses = {
  name: "Expenses",
  properties: {
      _id_expense: "int",
      category: "string",
      amount: "string",
      comments: "string",
      date: "date"
  }
}
const Incomes = {
  name: "Incomes",
  properties: {
      _id_income: "int",
      category: "string",
      amount: "string",
      comments: "string",
      date: "date"
  }
} */


const Expenses = {
  name: "Expenses",
  primaryKey: "_id_expense",
  properties: {
      _id_expense: "string",
      category: "string",
      amount: "int",
      comments: "string",
      date: "date"
  }
}
const Incomes = {
  name: "Incomes",
  primaryKey: "_id_income",
  properties: {
      _id_income: "string",
      category: "string",
      amount: "int",
      comments: "string",
      date: "date"
  }
}




const InputAjoutRevenus: React.FC<FormType> = ({navigation, countries, title}) => {

const IDexpense = new ObjectId();
const IDincome = new ObjectId();
  const [myUser, setMyUser] = useState<IObjet[] >([]);
  const { UUID } = Realm.BSON;


  const HandleSubmited = (values: any) => {
              navigation.navigate('Compte', {
              name: values.name,
              amount: values.amount,
              category: values.category,
              comments: values.comments,
              date: values.date,
              
            }) 
            
            const nombreAmount = parseInt(values.amount);
            console.log(nombreAmount);
      if(title === "Expenses"){     
          Realm.open({
              schema: [Expenses],
              deleteRealmIfMigrationNeeded: true,
          }).then(realm => {
              realm.write(() => {
                  realm.create('Expenses', {
                      _id_expense: IDexpense.toString(),
                      category: values.category,
                      amount: nombreAmount,
                      comments: values.comments,
                      date: values.date
                  })
              })
              console.log("Add user successfully");
              console.log('User', realm.objects('Expenses'));
              setMyUser([...realm.objects<IObjet>('Expenses')])
              realm.close()
          }).catch(err => {
              console.log('error: ', err);
          })
      
      
    } else {
      Realm.open({
        schema: [Incomes],
        deleteRealmIfMigrationNeeded: true,
    }).then(realm => {
        realm.write(() => {
            realm.create('Incomes', {
                _id_income: IDincome.toString(),
                category: values.category,
                amount: nombreAmount,
                comments: values.comments,
                date: values.date
            })
        })
        console.log("Add user successfully");
        console.log('User', realm.objects('Incomes'));
        setMyUser([...realm.objects<IObjet>('Incomes')])
        realm.close()
    }).catch(err => {
        console.log('error: ', err);
    })
  } 
}
  /*useEffect(() => {
    Realm.open({
        schema: [Incomes, Expenses]
    }).then(realm => {
        //setMyUser([...realm.objects<IObjet>('User')])
        /// console.log('User', realm.objects('User'));
        //console.log('UserIncomes', realm.objects('Incomes')); 
        console.log('UserIncomes', realm.objects('Incomes'));
        console.log('UserExpenses', realm.objects('Expenses'));
        
    })
    return () => {
        Realm.open({
          schema: [Incomes, Expenses]
      }).then(realm => {
          //setMyUser([...realm.objects<IObjet>('User')])
          // console.log('User', realm.objects('User'));
          console.log('User', realm.objects('Incomes')); 
          console.log('User', realm.objects('Incomes'));
          console.log('User', realm.objects('Expenses'));
          
      })
    }
  },[myUser])*/
  
  const DeleteAllUser = () => {
    Realm.open({
        schema: [Expenses, Incomes]
    }).then(realm => {
        realm.write(() => {
            realm.delete(
                realm.objects("Expenses")//.filtered("name = 'Aline'")
              );
        })
        console.log("Delete user successfully");
        realm.close()
    }).catch(err => {
        console.log('error: ', err);
    })
  };
  

  return (
  
  <View style={styles.containerFormStyle}>
   <Formik 
     initialValues={{ name: '', amount: '', category: '', comments: '', date: '',}}
     validateOnMount={true}
     onSubmit={(values) => HandleSubmited(values)}
    
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
         {/* <InputAll
           onChangeText={handleChange('lastname')}
           onBlur={handleBlur('lastname')}
           value={values.lastname}
           style={styles.inputStyle}
           label='Nom'
           placeholder="Entrez votre nom"
         />
         {(errors.lastname && touched.lastname) &&
             <Text style={styles.errorStyle}>{errors.lastname}</Text>
          } */}
         
         <SelectDropdownPicker 
            value={values.category} 
            label='Catégorie'
            onSelect={handleChange('category')} 
            countriesArray={countries}/>
          {(errors.category && touched.category) &&
            <Text style={styles.errorStyle}>{errors.category}</Text>
         }
         <InputAll
           onChangeText={handleChange('amount')}
           onBlur={handleBlur('amount')}
           value={values.amount}
           style={styles.inputStyle}
           keyboardType="numeric"
           label='Montant'
           placeholder="Quelle est votre amount"
         />
          {(errors.amount && touched.amount) &&
             <Text style={styles.errorStyle}>{errors.amount}</Text>
          }
         <InputAll
           onChangeText={handleChange('comments')}
           onBlur={handleBlur('comments')}
           value={values.comments}
           style={styles.inputStyle}
           label='commentaire'
           placeholder="Laisser un comments"
         />
          {(errors.comments && touched.comments) &&
             <Text style={styles.errorStyle}>{errors.comments}</Text>
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
)};


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