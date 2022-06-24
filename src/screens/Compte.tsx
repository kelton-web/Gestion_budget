/* import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import React from 'react'
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteNavigation } from '../interfaces';

const Compte: React.FC<RouteNavigation> = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteNavigation>>()
  const route = useRoute<RouteProp<RouteNavigation>>();
  console.log(route.params?.name)
  console.log(route.params?.montant)
  return (
    <View>
      <Text>Prénom: {route.params?.name}</Text>
      <Text>Nom: {route.params?.lastname}</Text>
      <Text>Montant: {route.params?.montant}</Text>
      <Text>Category: {route.params?.category}</Text>
      <Text>Commentaire: {route.params?.commentaire}</Text>
      <Text>Date: {route.params?.date.toString()}</Text>
      
    </View>
  )
}

export default Compte */


import React, { useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteNavigation } from '../interfaces';
import SoldeCompte from '../components/Tasks/TasksAccueil/SoldeCompte';
import ListDebit from '../components/Tasks/TasksAccueil/ListAccueil';
import ButtonChoiceHome from '../components/_Shared/ButtonChoiceHome';
import PickerPerso from '../components/_Shared/PickerPerso';
import Data from '../assets/data/data.json';
import { ArrayData, Iexpenses, Iincomes } from '../interfaces/index';
import ListItem from '../components/_Shared/ListItem';
import ListDebitCompte from '../components/Tasks/TasksCompte/ListReturn';
import {returnResultIcome} from '../utils/TranformAmount';
import {returnResultExpense} from '../utils/TranformAmount';
import RealmDataBase from '../components/Tasks/TasksCompte/RealmDataBase';

interface AccueilType {

}

const Compte: React.FC<AccueilType> = ({}) => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteNavigation>>();
    const route = useRoute<RouteProp<RouteNavigation>>();
    console.log(route.params?.name)
    console.log(route.params?.lastname)
    console.log(route.params?.category)
    console.log(route.params?.commentaire)
    console.log(route.params?.montant)
    console.log(route.params?.date)
    const myName = route.params;

    const [choice, SetChoice] = useState<string>("");
/*     const [newData, SetNewData] = useState(Data[0].user);
    console.log(newData); */

/* *********************************** Realm DataBase *********************************** */

const ChangeStateChoiceRevenus = () => {
  SetChoice("revenus")
  // console.log(choice)
}
const ChangeStateChoiceDepenses = () => {
  SetChoice("depenses")
  // console.log(choice)
}
const ChangeStateChoice = () => {
  SetChoice(" ")
  // console.log(choice)
}

const HandleUser = Data.map(data => data.user)
const [userData, setUserData] = useState("Ross Hess")
const userSelect = Data.filter((item) => item.user === userData)

const onSelectedUser = (values:string) => {
  setUserData(values)
  var selectedRealm = userSelect;
  setMyInfoUser([...selectedRealm])

  console.log(values)
  console.log("J'ai besoin " + selectedRealm)
}

  const [MyInfoUser, setMyInfoUser] = useState<any[]>([]);
  console.log("My informations " + MyInfoUser);

  const SaveDataBaseRealm = () => {
    console.log("My informations saved" + MyInfoUser);
  }

    returnResultIcome(userSelect[0].incomes);
    returnResultExpense(userSelect[0].expenses);
    const _renderItem = ({item}: {item: Iincomes| Iexpenses}) => {
     return ( 
      <View>
        <ListItem
          category={item.category}
          amount={item.amount}
          date={item.date}
          comments={item.comments}
        ></ListItem>
      </View>
      )
    }

    


  return (
    <View style={styles.containerAccueil}>
      <View style={styles.containerSolde}>
        <SoldeCompte />
          <PickerPerso countriesArray={HandleUser} onSelect={onSelectedUser} value={userData}/>
      </View>
      <View>
      </View>
      <View style={styles.containerAllDebit}>
        <View style={styles.choiceFilter}>
          <ButtonChoiceHome title="Revenus" onPress={ChangeStateChoiceRevenus}/>
          <View style={styles.separatorChoice}/>
          <ButtonChoiceHome title="Depenses"  onPress={ChangeStateChoiceDepenses}/>
          <View style={styles.separatorChoice}/>
          <ButtonChoiceHome title="Compte" onPress={ChangeStateChoice} />
        </View>
          {/* <View style={styles.smallcategory}>
            <Text style={{left: -5, fontSize: 12, color: 'gray'}}>Categorie</Text>
            <View style={styles.separatorChoiceOne}/>
            <Text style={{fontSize: 12, color: 'gray'}}>Date</Text>
            <View style={styles.separatorChoiceOne}/>
            <Text style={{left: 5, fontSize: 12, color: 'gray'}}>Montant</Text>
          </View> */}
        <View>
          <ListDebitCompte choice={choice} data={userSelect} _renderItem={_renderItem} />
        </View>
        <RealmDataBase />
        <Button title="Create User" onPress={SaveDataBaseRealm  }/>
      </View>
    </View>
  )
}

export default Compte

const styles = StyleSheet.create({
    containerAccueil: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',        
    },
    containerBtn: {
      flexDirection: "row",    
      width: '100%',  
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    containerSolde: {
      flex: .7,
      width: '100%',
      backgroundColor: '#dff9fb',
    },
    containerBtnChoice: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#dfe4ea',
      borderBottomWidth: 1,
      borderTopWidth: 1,
    },
    containerAllDebit: {
      flex: 3,
      width: "100%",
      backgroundColor: "#fff",
    },
    choiceFilter: {
      height: 40,
      width: "100%",
      backgroundColor: "#dfe6e9",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    separatorChoice: {
      height: 20,
      width: 1,
      backgroundColor: "black",
    },
    separatorChoiceOne: {
      height: 10,
      width: 1,
      backgroundColor: "gray",
    },
    smallcategory: {
      backgroundColor: 'white', 
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: "center",
      shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    }
})



/* if (choice === "revenus") {
  return (
    <View>
      <FlatList
        data={arrayIcomes}
        renderItem={renderItem}
        keyExtractor={item => item._id_income}
      />
    </View>
  )
} else if (choice === "depenses") {
  return (
    <View>
      <FlatList
        data={arrayExpenses}
        renderItem={renderItem}
        keyExtractor={item => item._id_expense}
      />
    </View>
  )
} else {
  return (
    <View>
       <FlatList
        data={arrayGeneral}
        renderItem={renderItem}
        keyExtractor={item => item._id }
      />
      
    </View>
  )
}
 */