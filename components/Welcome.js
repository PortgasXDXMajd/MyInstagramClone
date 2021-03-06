import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

function Welcome() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Processing...</Text>
        </View>
    )
}


export default Welcome

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    },
    text:{
        fontSize:25,
        fontWeight: 'bold'
    }

})