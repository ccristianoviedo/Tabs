import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const BreadItem=({item, onSelected})=>{
    return(
        <TouchableOpacity
            onPress={()=>onSelected(item)}            
        >
            <View style={styles.breadItem}>
                <Text style={styles.title}>{item.name}</Text>
            </View>
            <View>
                <Text style={styles.detail}>{item.price}</Text>
                <Text style={styles.detail}>{item.weight}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    title:{
        margin:15,
        fontSize: 28,
    },
    breadItem:{
        margin:10,
        padding:20,
        backgroundColor:'green',
        borderRadius:3,
    },
    detail:{
        fontSize: 18,
    }
})
export default BreadItem;