import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react'

interface StockPropsType {
    item?: string,
    id?: string,
    category?: string,
    comments?: string,
    date: string,
    amount?: string,
}

const ListItem: React.FC<StockPropsType>= ({item, id, category, comments, date, amount}) => {
    const newDate = date.substr(0, 10)
  return (
    <TouchableOpacity>
        <View style={styles.container}>
            <View style={styles.styleCategory}>
                <Text>{category}</Text>
            </View>
            <View style={styles.styleDate}>
                <Text>{newDate}</Text>
            </View>
            <View style={styles.styleAmount}>
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
    }
})