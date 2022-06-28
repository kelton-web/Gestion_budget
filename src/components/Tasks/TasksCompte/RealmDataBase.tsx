import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export type IObjet = {
  name: string,
  primaryKey: string,
  Incomes: IncomesType[],
  Expenses: ExpensesType[],
}

/* type IProperties = {
  _id: string,
  category: string,
  amount: number,
  comments: string,
  dob: Date
} */
export type IncomesType = {
  _id_income: string,
  category: string,
  amount: number,
  comments: string,
  date: Date
}
export type ExpensesType = {
  _id_expense: string,
  category: string,
  amount: number,
  comments: string,
  date: Date
}


export const Expenses = {
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
export const Incomes = {
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


const RealmDataBase = () => {
  return (
    <View>
      <Text>RealmDataBase</Text>
    </View>
  )
}

export default RealmDataBase

const styles = StyleSheet.create({})