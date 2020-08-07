import React from 'react';
import {Text, View, Vibration, Button, TouchableOpacity} from 'react-native';
import { Camera } from 'expo-camera';
import AsyncStorage from '@react-native-community/async-storage';


class ScanScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            hasPermission: null,
            hasScanned: false
        }

    }

    async componentDidMount()
    {
        const {status} = await Camera.requestPermissionsAsync();
        this.setState({
            hasPermission: status === 'granted'
        })
    }

    addProductToHistory= async (product) =>
    {
        try {
            let history = JSON.parse(await AsyncStorage.getItem('product_history'));

            if (history === null) {
                history = [];
            }

            console.log(history);
            history.push(product);
            console.log(history);
            console.log(typeof history);
            console.log(history.length);
            await AsyncStorage.setItem('product_history', JSON.stringify(history));
            console.log('its  all good buddy')
        } catch (e) {
            console.error(e);
        }
    }

    handleBarcode =  async ({data}) =>
    {
        this.setState({hasScanned: true});
        Vibration.vibrate();
        fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
            .then((response) => response.json())
            .then((json) => {
                this.addProductToHistory(json.product);
                this.props.navigation.navigate('ProductScreen', {item: json.product})
            })
            .catch((error) => {
                console.error(error);
            })

    }

    render()
    {
        if (this.state.hasPermission === null) {
            return <View />;
        }
        if (this.state.hasPermission === false) {
            return <View><Text>No access to camera</Text></View>;
        }
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
            }}>
                <Camera
                    style={{ flex: 1 }}
                    type={Camera.Constants.Type.back}
                    onBarCodeScanned={this.state.hasScanned ? undefined : this.handleBarcode}
                >
                    {
                        this.state.hasScanned &&
                        <View style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                                }}
                        >
                            <TouchableOpacity
                                style={{
                                    flex: 0.2,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                }}
                                onPress={() => this.setState({hasScanned: false})}
                            >
                                <Text style={{ fontSize: 18, marginBottom: 10, color: 'red' }}>Tap to scan again</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </Camera>
            </View>
        );
    }

}

export default ScanScreen;