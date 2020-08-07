import {Text, View, StyleSheet, Image} from "react-native";
import React from "react";


const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    stretch: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        margin:15,
    },
    second_title: {
        fontSize: 17,
        color:'#224057',
        fontWeight: 'bold',

    },
});

const ProductScreen = ({route}) => {

    const {categories, ingredients_text_fr, product_name_fr, image_thumb_url} = route.params.item;

    return (
        <View style={{ flex: 1, justifyContent: 'top', alignItems: 'top', padding:20 }}>
            <Text style={styles.title}>Product:</Text>
            <Text style={styles.second_title}>{product_name_fr}</Text>
            <Image
                style={styles.stretch}
                source={{
                    uri: image_thumb_url,
                }}
            />
            <Text style={styles.title}>Catégorie: </Text>
            <Text> {categories}</Text>

            <Text style={styles.title}>Ingredients : </Text>
            <Text> {ingredients_text_fr}</Text>
        </View>
    );
}

export default ProductScreen;