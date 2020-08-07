import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./src/views/HomeScreen";
import ScanScreen from "./src/views/ScanScreen";
import HistoryScreen from "./src/views/HistoryScreen";
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import ProductScreen from "./src/views/ProductScreen";
import {Icon} from 'react-native-elements';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ProductScreen" component={ProductScreen} />
            </Stack.Navigator>
    );
}



export default function App() {
  return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStack} options={{
                    tabBarLabel:'Bienvenue !',
                    tabBarIcon: () => <Icon name="home" type="ionicons" />
                }}
                />
                <Tab.Screen name="Scan" component={ScanScreen} options={{
                    tabBarLabel:'Scan',
                    tabBarIcon: () => <Icon name="barcode-scan" type="material-community" />
                }} />
                <Tab.Screen name="History" component={HistoryScreen} options={{
                    tabBarLabel:'History',
                    tabBarIcon: () => <Icon name="history" type="material-community" />
                }} />
            </Tab.Navigator>
        </NavigationContainer>
  );
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center'
  }
});
