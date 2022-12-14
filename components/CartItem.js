import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import {COLORS} from '../constants/colors'

const CartItem = ({item, onDelete}) => {
  return (
    <View style={styles.item}>
        <View>
            <Text style={styles.header}>
                {item.name}
            </Text>
        </View>
        <View style={styles.detail}>
            <View >
                <Text>Cantidad: {item.quatity}</Text>
                <Text>{item.price}</Text>
            </View>
            <TouchableOpacity
                onPress={()=>onDelete(item.id)}
            >
                <Ionicons name='trash' size={24} color={COLORS.accent}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    item:{
        flex:1,
        padding: 8,
        borderBottomWidth:2,
        borderBottomColor: '#ccc'
    },
    header:{
        fontSize:18,
        fontFamily:'UbuntuBold',
    },
    detail:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'space-between'
    },
    text:{
        fontSize:16,
        fontFamily:'UbuntuBold'
    },
})
export default CartItem 