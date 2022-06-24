import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteNavigation, Iincomes } from '../../interfaces/index';


interface StockPropsType {
    item?: string,
    id?: string,
    category?: string,
    comments?: string,
    date: string,
    amount?: string,
    onPress?: () => void
    type?: any
    typeCompte?: any

}

const ListItem: React.FC<StockPropsType>= ({item, id, category, comments, date, amount, onPress, type, typeCompte}) => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteNavigation>>()
    const newDate = date.substr(0, 10)
  return (
    <TouchableOpacity onPress={onPress}  >
        <View style={[
            styles.container,
            id == type ? styles.inlineStyle : styles.alertsStyle
        ]}>
            <View style={styles.styleCategory}>
                <Text>{category}</Text>
            </View>
            <View style={styles.styleDate}>
                <Text>{newDate}</Text>
            </View>
            <View>
                <Text>{amount}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 6,
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