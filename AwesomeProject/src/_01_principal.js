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

// justifyContent: 'center'
// resizeMode='contain'
function Principal({ navigation }) {
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
                ¡HOLA, TLEN, SKGATLEN!
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Nos da gusto que te acerques a conocer el idioma y cultura tutunakú.
                El contenido de esta App considera la variante de Tuxtla, Puebla y
                Filomeno Mata, Veracruz. Esperamos pronto agregar más variantes de
                este idioma a nuestro contenido.{"\n\n"}
                ¡Que lo disfrutes!
            </Text>
            
            <Boton title="Gramática" onPress={() => navigation.navigate('Gramatica')} />
            <Boton title="Números" onPress={() => navigation.navigate('Numeros')} />
            <Boton title="Vocabulario" onPress={() => navigation.navigate('Vocabulario')} />
            <Boton title="Animales" onPress={() => navigation.navigate('Animales')} />
            <Boton title="Plantas" onPress={() => navigation.navigate('Plantas')} />
            <Boton title="Audiovisuales" onPress={() => navigation.navigate('Audiovisuales')} />
            <Boton title="Cuentos" onPress={() => navigation.navigate('Cuentos')} />
            <Boton title="Galería" onPress={() => navigation.navigate('Galeria')} />
            <Boton title="Conócenos" onPress={() => navigation.navigate('Conocenos')} />
        </View>
    );
}

export default Principal;