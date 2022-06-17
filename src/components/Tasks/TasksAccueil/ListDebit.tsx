import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { date } from 'yup/lib/locale'
import Date from '../../../../src/assets/data/data.json'
import { ArrayData } from '../../../../src/interfaces/index'
import { resultatTotal } from '../../../../src/utils/TranformAmount'
import ListItem from '../ListItem'

const ListDebit = () => {
    const arrayIcomes = Date[0].incomes.filter(user => user);
    const arrayExpenses = Date[0].expenses.filter(user => user);
    console.log(arrayIcomes);

/*     const result = parseInt(array)
 */    const renderItem = ({item}) => {
        return (
            <View>
                <ListItem
                  id={item._id_income}
                  item={item}
                  category={item.category}
                  amount={item.amount}
                  date={item.date}
                  comments={item.comments}
                ></ListItem>
            </View>
        )
    }
    
  return (
    <View>
      <FlatList
        data={arrayIcomes}
        renderItem={renderItem}
        keyExtractor={item => item._id_income}
      />
    </View>
  )
}

export default ListDebit

const styles = StyleSheet.create({})