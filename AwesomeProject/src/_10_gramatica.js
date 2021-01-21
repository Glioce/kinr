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

function Gramatica({ navigation }) {
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
                GRAMÁTICA
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                Por Gabriela Lucas, José Santiago y Juan M. Díaz
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                En esta sección encontrarás información lingüística sobre la estructura 
                de las palabras del idioma tutunakú en la variante central del Sur.
            </Text>
            
            <Boton title="Grafías" /*onPress={() => navigation.navigate('Gramatica')}*/ />
            <Boton title="Pronombres posesivos" />
            <Boton title="Prefijos posesivos" />
        </View>
    );
}

export default Gramatica;