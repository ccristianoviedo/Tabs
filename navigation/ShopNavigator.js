import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from 'react-native';

import CategoryScreen from "../screens/CategorysScreen";
import CategoryBreadScreen from "../screens/CategoryBreadScreen";
import BreadScreenDetail from "../screens/BreadScreenDetail";
import { COLORS } from "../constants/colors";

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"  
            screenOptions={{
                    headerStyle: {
                      backgroundColor: Platform.OS === 'android' ? COLORS.primary: COLORS.accent
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' :COLORS.primary,
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}>
                
                <Stack.Screen 
                name="Home" 
                component={CategoryScreen}
                options={
                    {
                        title:'Mi Pan'
                    }
                }              
                />
                <Stack.Screen 
                name="Products" 
                component={CategoryBreadScreen}
                options={({route})=> ({title: route.params.name})}
                />
                <Stack.Screen 
                name="Details" 
                component={BreadScreenDetail}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default ShopNavigator;