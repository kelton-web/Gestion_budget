import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteNavigation } from '../interfaces';
import SoldeCompte from '../components/Tasks/TasksAccueil/SoldeCompte';
import ListDebit from '../components/Tasks/TasksAccueil/ListAccueil';
import ButtonChoiceHome from '../components/_Shared/ButtonChoiceHome';
import BtnRevenusDepense from '../components/_Shared/BtnRevenusDepense';
import Data from '../assets/data/data.json';
import {returnResultIcome} from '../utils/TranformAmount';
import {returnResultExpense} from '../utils/TranformAmount';


interface AccueilType {

}

const Accueil: React.FC<AccueilType> = ({}) => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteNavigation>>();
    const [choice, SetChoice] = useState<string>("")


    const HandleIcomes = () => {
      navigation.navigate('Ajout_revenus')
    }

    const HandleExpenses = () => {
      navigation.navigate('Ajout_depenses')
    }


    const ChangeStateChoiceRevenus = () => {
      SetChoice("revenus")
      //console.log(choice)
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
      console.log(values)
    }

    returnResultIcome(userSelect[0].incomes);
    returnResultExpense(userSelect[0].expenses);
  return (
    <View style={styles.containerAccueil}>
      <View style={styles.containerSolde}>
        <SoldeCompte />
      </View>
      <View style={styles.containerBtnChoice}>
        <View style={styles.containerBtn}>
          <View style={{width: '50%', height: '100%', backgroundColor: 'rgba(46, 213, 115,.2)'
}}>
            <BtnRevenusDepense HandleNavigation={HandleIcomes} title="Ajouter" stylebtn={styles.btnRevenus} style={styles.textBtnRevenusStyle}/>  
          </View>
          <View style={{width: '50%', height: '100%', backgroundColor: 'rgba(255, 71, 87, .2)'}}>
            <BtnRevenusDepense HandleNavigation={HandleExpenses} title="Retirer" style={styles.textBtnDepenseStyle} stylebtn={styles.btnDepenses}/>
          </View>

        </View>
      </View>
      <View style={styles.containerAllDebit}>
          <View style={styles.smallcategory}>
            <Text style={{left: -5, fontSize: 12, color: 'gray'}}>Categorie</Text>
            <View style={styles.separatorChoiceOne}/>
            <Text style={{fontSize: 12, color: 'gray'}}>Date</Text>
            <View style={styles.separatorChoiceOne}/>
            <Text style={{left: 5, fontSize: 12, color: 'gray'}}>Montant</Text>
          </View>
        <View>
          <ListDebit choice={choice} data={userSelect}/> 
        </View>
      </View>
    </View>
  )
}

export default Accueil

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
      backgroundColor: '#7bed9f',
    },
    containerBtnChoice: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#dfe4ea',
      borderBottomWidth: 1,
      borderTopWidth: 1,
    },
    btnRevenus: {
      paddingHorizontal: 20,
      paddingVertical: 15,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 5
    },
    btnDepenses: {
      paddingHorizontal: 20,
      paddingVertical: 15,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 5
      
    },
    textBtnRevenusStyle: {
      width: "100%",
      textAlign: "center",
      fontWeight: "500",
    },
    textBtnDepenseStyle: {
      width: "100%",
      textAlign: "center",
      fontWeight: "500",

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