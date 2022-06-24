import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import { date } from 'yup/lib/locale'
import Data from '../../../assets/data/data.json'
import { AllData, Iincomes, Iexpenses, RouteNavigation } from '../../../interfaces/index';
import { resultatTotal } from '../../../utils/TranformAmount'
import ListItem from '../../_Shared/ListItem'


interface ListPropsType {
  choice?: string,
  data?: any
}

type newTypeArray = {
  date: string
  amount: string
  category: string
  comments: string
  _id: string
}


const ListDebit: React.FC<ListPropsType> = ({choice, data}) => {
    const arrayIcomes = Data[0].incomes.filter(user => user);
    const arrayExpenses = Data[0].expenses.filter(user => user);
    const arrayGeneral: newTypeArray[] = data[0].incomes.map((el: Iincomes) => {
        return (
          {
            date: el.date,
            amount: el.amount,
            category: el.category,
            comments: el.comments,
            _id: el._id_income,
            typeIncome: el._id_income
          }
        )
    }).concat(data[0].expenses.map((el: Iexpenses) => {
      return (
        {
          date: el.date,
          amount: el.amount,
          category: el.category,
          comments: el.comments,
          _id: el._id_expense,
          typeExpense: el._id_expense

        }
      )
  }))
    console.log(arrayGeneral);

   

/*     let arrayAll = [arrayIcomes, arrayExpenses]; 
 */    
/*     console.log(arrayAll);
 *//*     const result = parseInt(array)
 */    const renderItem = ({item} : {item: Iincomes| Iexpenses | newTypeArray | any}) => {
  //const id = item._id_income !== undefined ? item._id_income : item._id_expense
  console.log(item);
        return (
            <View>
                <ListItem
                  category={item.category}
                  amount={item.amount}
                  date={item.date}
                  comments={item.comments}
                  type={item.typeExpense}
                ></ListItem>
            </View>
        )
    }
      return (
        <View>
           <FlatList
            data={arrayGeneral.sort(function(a, b) {
              var c: any = new Date(a.date);
              var d: any = new Date(b.date);
              console.log(typeof(c));
              return d - c;
          })}
            renderItem={renderItem}
            keyExtractor={item => item._id }
          />
          
        </View>
      )
  

}

export default ListDebit

const styles = StyleSheet.create({})