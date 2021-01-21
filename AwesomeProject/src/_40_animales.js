import React from 'react'; //estrictamente necesario
import {
  View,
  Text,
  Button,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  ScrollView
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

function Animales({ navigation }) {
    return (
        <ScrollView>
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
                ANIMALES
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                Por Gabriela Lucas, Juan M. Díaz y Citlal Solano
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Los animales son parte fundamental dentro de la cultura tutunakú, 
                debido a que forman parte de sus formas de vida y cosmovisión, 
                utilizándolos en la medicina tradicional o inspirando la creación 
                de relatos, entre otros. 
                {"\n\n"}
                En esta sección encontrarás una amplia lista de animales que 
                habitan en comunidades totonacas de la Sierra Nororiental de Puebla. 
                Te compartimos su nombre en idioma tutunakú, incluyendo su escritura 
                y audios para practicar su pronunciación en la variante central del 
                Sur. También, encontrarás su nombre científico, su nombre en español 
                y los usos tradicionales que le dan en las comunidades. Te recomendamos 
                observar a detalle la siguiente iconografía:
            </Text>
            
            <Boton title="Anfibios" /*onPress={() => navigation.navigate('Gramatica')}*/ />
            <Boton title="Aves" />
            <Boton title="Mamíferos" />
            <Boton title="Reptiles" />
            <Boton title="Otros" />
        </View>
        </ScrollView>
    );
}

export default Animales;