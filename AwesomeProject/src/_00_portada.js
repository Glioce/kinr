import React from 'react'; //estrictamente necesario
import {
  View,
  Text,
  Button,
  Image,
} from 'react-native'; //varios elementos

// justifyContent: 'center'
// resizeMode='contain'
function Portada({ navigation }) {
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'white', padding:24}}>
            {/*<Text style={{fontSize:32}}>Portada</Text>*/}
            <Image source={require('../assets/logo.png')} style={{width:320}} resizeMode='contain' />
            <Button title='Entrar' color='gray' onPress={() => navigation.navigate('Principal')} />
        </View>
    );
}

export default Portada;