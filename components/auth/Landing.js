import React from 'react'
import { StyleSheet ,View, Text ,Button} from 'react-native';



export default function LandingPage({ navigation }) {
    return (
        <View style={styles.container}>
            
            <Button title='Register' onPress={()=> navigation.navigate('Register')}/>
            <Button title='Login' onPress={() => navigation.navigate('Login')}/>

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center'

    }

});