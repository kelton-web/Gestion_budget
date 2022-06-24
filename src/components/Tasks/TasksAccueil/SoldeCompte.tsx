import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { resultatTotal } from '../../../utils/TranformAmount'


const SoldeCompte = () => {
  return (
    <View style={styles.container}>
        <View style={styles.smallContainerTitle}>
            <Text style={styles.titleStyle}>Solde de votre compte</Text>
            <Text style={styles.soldeStyle}><Text>€</Text> {resultatTotal()}</Text>
        </View>
    </View>
  )
}

export default SoldeCompte

const styles = StyleSheet.create({
    container: { 
        flex: 1,
    },
    smallContainerTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        fontSize: 14,
    },
    soldeStyle: {
        fontSize: 22,
        top: "2%",
        fontWeight: "bold",

    }
})