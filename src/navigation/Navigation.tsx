import * as React from 'react';
import {View, Text, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Accueil from '../screens/Accueil';
import Compte from '../screens/Compte';
import { RouteNavigation } from '../interfaces';
import Ajout_revenus from '../screens/screensStacks/Ajout_revenus';
import Statistiques from '../screens/Statistiques';
import Ajout_depenses from '../screens/screensStacks/Ajout_depenses';
import RealmDataBase from '../components/Tasks/TasksCompte/RealmDataBase';

const Stack = createNativeStackNavigator<RouteNavigation>();
const Tab = createBottomTabNavigator<RouteNavigation>();

export  function RootTab() {
  return (
      <Tab.Navigator screenOptions={({ navigation,route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Accueil') {
            return (
              Platform.OS === 'ios' ?
              <Ionicons
                name={
                  focused
                    ? 'ios-home'
                    : 'ios-home-outline'
                }
                size={size}
                color={color}
              /> :  <Ionicons
              name={
                focused
                  ? 'md-home'
                  : 'md-home-outline'
              }
              size={size}
              color={color}
            />
            );
          } else if (route.name === 'Compte') {
            return (
              Platform.OS === 'ios' ?  <Ionicons
              name={focused ? 'card' : 'card-outline'}
              size={size}
              color={color}
            /> :  <Ionicons
            name={focused ? 'card' : 'card-outline'}
            size={size}
            color={color}
          />
             
            );
          }
           else if (route.name === 'Statistiques') {
            return (
              Platform.OS === 'ios' ?  <Ionicons
              name={focused ? 'bar-chart' : 'bar-chart-outline'}
              size={23}
              color={color}
            /> :  <Ionicons
            name={focused ? 'bar-chart' : 'bar-chart-outline'}
            size={23}
            color={color}
          />
             
            );
          }
       
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'black',
      })} >
        <Tab.Screen name="Accueil" component={Accueil} />
        <Tab.Screen name="Compte" component={Compte} />
        <Tab.Screen name="Statistiques" component={Statistiques} />
      </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
      <Stack.Screen
          name="RootTab"
          component={RootTab}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Ajout_revenus" component={Ajout_revenus} />
        <Stack.Screen name="Ajout_depenses" component={Ajout_depenses} />
        <Stack.Screen name="RealmDataBase" component={RealmDataBase} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
