import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './containers/HomeScreen';
import ElectronicsScreen from './containers/ElectronicsScreen';
import BooksScreen from './containers/BooksScreen';
import ShoppingCartIcon from './containers/ShoppingCartIcon';
import CartScreen from "./containers/CartScreen";


class ShoppingCart extends Component {
    render() {
        return (
            <MainNavigator /> 
        );
    }
}


const MainNavigator = createStackNavigator({
    Home : HomeScreen,
    Electronics: ElectronicsScreen,
    Books: BooksScreen,
    Cart: CartScreen
},{
    defaultNavigationOptions:{
        headerTitle:'Shopping App',
        headerRight:(
            <ShoppingCartIcon />

        )
    }
})

const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});