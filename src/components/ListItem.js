import {Image, StatusBar, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React from "react";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: StatusBar.currentHeight || 0,

    },
    item: {

        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#1d1d1d',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    second: {
        fontSize: 15,
        color:'#224057',
        fontStyle: 'italic',
    },
    stretch: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
    },
});

const goTo = (item, navigation) => {
    navigation.navigate('ProductScreen', {item})
};

const ListItem = ({ item, navigation }) => (
    <View style={styles.item}>
        <TouchableOpacity onPress={() => goTo(item, navigation)}>
        <Text style={styles.title}>{item.product_name_fr}</Text>
        <Text style={styles.second}>{item.brands_tags}</Text>
        <Image
            style={styles.stretch}
            source={{
                uri: item.image_thumb_url,
            }}
        />
        </TouchableOpacity>
    </View>
);

export default ListItem;