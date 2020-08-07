import {Text, View, Button, FlatList } from "react-native";
import React from "react";
import ListItem from "../components/ListItem";


class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pizzas: false
        }
    }

    componentDidMount() {
        return fetch('https://fr-en.openfoodfacts.org/category/pizzas/1.json')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    pizzas: json.products
                })
            })
            .catch((e) => {
                console.error(e);
            }
        )
    }

    render() {
        let pizzas = this.state.pizzas;

        return(<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <FlatList
                data={pizzas}
                renderItem={ ({ item }) => (
                    <ListItem item={item} navigation={this.props.navigation} />
                ) }
                keyExtractor={item => item.id}
            />
        </View>)
    }

}

export default HomeScreen;