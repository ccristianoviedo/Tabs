import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function BreadScreenDetail({navigation}) {
  return (
    <View style={styles.container}>
      <Text>BreadScreenDetail</Text>
      <Button 
      title="VOLVER A INICIO"
      onPress={()=>{
        navigation.navigate('Home')
      }}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
