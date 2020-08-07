import {FlatList, Text, View} from "react-native";
import React from "react";
import AsyncStorage from '@react-native-community/async-storage';
import ListItem from "../components/ListItem";


class HistoryScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            history: false
        }
    }

    getHistory = async () => {
        return JSON.parse(await AsyncStorage.getItem('product_history'));
    }

    async componentDidMount()
    {
        let history = await this.getHistory();
        this.setState({history});
    }

    render()
    {
        const { history } = this.state;

        return(
            <View style={{flex: 1}}>
                <FlatList
                    data={history}
                    renderItem={ ({ item }) => (
                        <ListItem item={item} navigation={this.props.navigation} />
                    ) }
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

export default HistoryScreen;