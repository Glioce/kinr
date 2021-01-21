import React from 'react'; //estrictamente necesario
import {
  View,
  Text,
  Button,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native'; //varios elementos

const Boton = (props) => {
    return (
        <TouchableOpacity 
            style={{
                borderColor:'gray', 
                borderWidth:1, 
                borderRadius:4, 
                padding:6, 
                backgroundColor:'whitesmoke', 
                margin:4,
                alignItems:'center'
            }}
            onPress={props.onPress}
        >
            <Text style={{fontFamily:'OpenSans-Regular', fontSize:16}}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

function Numeros({ navigation }) {
    return (
        <View style={{
            flex:1, 
            alignItems:'stretch', 
            justifyContent:'flex-start', 
            backgroundColor:'white', 
            padding:24}}
        >
            {/*<Image source={require('../assets/logo.png')} 
                style={{width:320, height:60}} resizeMode='contain'
            />*/}
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                NÚMEROS
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                Por José Santiago y Juan M. Díaz
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Cuando se cuenta en el idioma tutunakú, los números siempre van acompañados por
                un prefijo que está determinado la forma o aspecto del elemento que se está contando.
                {"\n\n"}
                Aquí te presentamos 24 prefijos que sirven para contar un sinfín de cosas.
                Podrás aprender la escritura y pronunciación en la variante central alto.
            </Text>
            
            <Boton title="Escuchar" /*onPress={() => navigation.navigate('Gramatica')}*/ />
        </View>
    );
}

export default Numeros;