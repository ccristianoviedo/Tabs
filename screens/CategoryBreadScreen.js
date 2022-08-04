import { StyleSheet, Text, View,Button, FlatList } from 'react-native';
import {BREAD} from '../data/breads'
import BreadItem from '../components/breadItem'

export default function CategoryBreadScreen({navigation, route}) {

    const breads = BREAD.filter(bread => bread.category === route.params.categoryID)

    const handlerSelected = (item) =>{
        navigation.navigate('Detail',{
            productID:item.id,
            name:item.name
        })
    }

    const renderItemBread = ({ item }) =>(<BreadItem item={item} onSelected={handlerSelected}/>)

  return (
    <FlatList
    data={breads}
    keyExtractor={(item)=>item.id}
    renderItem={renderItemBread}  
    />
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
