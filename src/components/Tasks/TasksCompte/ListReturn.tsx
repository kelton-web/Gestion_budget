import React, { ReactElement, useState } from 'react'
import { FlatList, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { date } from 'yup/lib/locale'
import Data from '../../../../src/assets/data/data.json'
import { AllData, RouteNavigation } from '../../../../src/interfaces/index'
import { resultatTotal } from '../../../../src/utils/TranformAmount'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ListItem from '../../_Shared/ListItem'
import { Iincomes, Iexpenses, ArrayData } from '../../../interfaces/index';

interface ListPropsType {
  choice?: string,
  data: any,
  _renderItem: ({item}: {item: Iincomes| Iexpenses}) => void
  keyExtractor?: any,
  //MyInfoUser: Iincomes[] | Iexpenses[],
}

type newTypeArray = {
  date: string
  amount: string
  category: string
  comments: string
  _id: string,
}

const ListDebitCompte: React.FC<ListPropsType> = ({choice, data, _renderItem, }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteNavigation>>();

    const arrayIcomes = Data[0].incomes.filter(user => user);
    const arrayExpenses = Data[0].expenses.filter(user => user);


   /*  let arrayUserInfo: Iincomes[];
    MyInfoUser.map(item => {
      return ( 
                item.amount.push(arrayUserInfo),
                item.category.push(arrayUserInfo),
                item.comments.push(arrayUserInfo),
                item.date.push(arrayUserInfo)
          )
    }) */
   

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







  const onPressNavigate = () => {
    navigation.navigate('Statistiques')
  }

 /*   let arrayChoice: Iexpenses | newTypeArray[] | Iincomes;
    if(choice === "revenus") {
      arrayChoice = data[0].incomes;
    }else if(choice === "depenses") {
      arrayChoice = data[0].expenses;
    }else {
      arrayChoice = arrayGeneral;
    } */
    // console.log(arrayGeneral);

/*     let arrayAll = [arrayIcomes, arrayExpenses]; 
 */    
/*     console.log(arrayAll);
 *//*     const result = parseInt(array)
 */    const renderItem = ({item} : {item: Iincomes| Iexpenses | newTypeArray | any }) => {
  //const id = item._id_income !== undefined ? item._id_income : item._id_expense
        return (
            <View>
                <ListItem
                  category={item.category}
                  amount={item.amount}
                  date={item.date}
                  comments={item.comments}
                  onPress={onPressNavigate}
                  type={item.typeIncome}
                ></ListItem>
            </View>
        )
    }
     const __renderItem = ({item} : {item: Iincomes| Iexpenses | newTypeArray | any }) => {
  //const id = item._id_income !== undefined ? item._id_income : item._id_expense
        return (
            <View>
              <TouchableOpacity onPress={onPressNavigate}  >
                <View style={[ styles.container ]}>
                  <View style={styles.styleCategory}>
                      <Text>{item.category}</Text>
                  </View>
                  <View style={styles.styleDate}>
                      <Text>{item.date.substr(0, 10)}</Text>
                  </View>
                  <View>
                      <Text>{item.amount}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
        )
    }
    


    if (choice === "revenus") {
      return (
        <View>
          <FlatList
            
            data={data[0].incomes.sort(function(a: any, b:any) {
                var c: any = new Date(a.date);
                var d: any = new Date(b.date);
                return d - c;
            })}
            renderItem={__renderItem}
            keyExtractor={(item: Iincomes) => item._id_income}
          />
        </View>
      )
    } else if (choice === "depenses") {
      return (
        <View>
          <FlatList
            data={data[0].expenses.sort(function(a: any, b: any) {
                var c: any = new Date(a.date);
                var d: any = new Date(b.date);
                return d - c;
            })}
            renderItem={renderItem}
            keyExtractor={(item: Iexpenses) => item._id_expense}
          />
        </View>
      )
    } else {
      return (
        <View>
           <FlatList
            data={arrayGeneral.sort(function(a, b) {
                var c: any = new Date(a.date);
                var d: any = new Date(b.date);
                return d - c;
            })}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
          
        </View>
      )
    }

}

export default ListDebitCompte

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 6,
    backgroundColor: 'rgba(46, 213, 115,.1)'

},
styleDate: {
    justifyContent: 'center', 
    width: '30%',
    marginRight: 32,
    alignItems: 'flex-start', 

},
styleAmount: {
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    width: '20%',
},
styleCategory: {
    justifyContent: 'center', 
    alignItems: 'flex-start',
    width: '40%',
    
},
inlineStyle: {
    backgroundColor: 'rgba(255, 99, 72,.1)'
},
alertsStyle: {
    backgroundColor: 'rgba(46, 213, 115,.1)'
}
})