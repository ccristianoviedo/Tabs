import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BreadDetailScreen=({ route })=>{
    const { bread }= route.params
    return(
        <View style={styles.breadItem}>
            <Text style={styles.title}>{bread.name}</Text>
            <Text style={styles.title}>{bread.description}</Text>            
            <Text style={styles.detail}>Precio: {bread.price}</Text>
            <Text style={styles.detail}>Peso: {bread.weight}</Text>
        </View>      
    )
}
const styles = StyleSheet.create({
    title:{
        margin:15,
        fontSize: 28,
    },
    breadItem:{
        flex:1,
        margin:10,
        padding:20,
        backgroundColor:'#67D45A',
        borderRadius:3,
    },
    detail:{
        fontSize: 38,
        backgroundColor:'#A5DABE',
        border: 'black solid'
    }
})
export default BreadDetailScreen;