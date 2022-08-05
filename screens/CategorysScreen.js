import React from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from '../data/categories';
import GridItem from '../components/gridItem'

export default function CategoryScreen({ navigation }) {

    const handleSelectedCategory = (item) =>{
        navigation.navigate('Products', {
            categoryID: item.id,
            name: item.title,
        });
    }
    const renderGridItem=({ item })=>(
      <GridItem item={item} onSelected={handleSelectedCategory}/>
    )
    
 return (    
    <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderGridItem}
        numColumns={2}
    />
 ) 
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
