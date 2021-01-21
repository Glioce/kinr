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

function Plantas({ navigation }) {
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
                PLANTAS
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                Por Gabriela Lucas, Juan M. Díaz y Citlal Solano
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Las plantas son uno de los elementos más importantes dentro de la cultura 
                tutunakú, debido a que son fuente de abastecimiento de alimento, refugio 
                y remedios medicinales tradicionales.
                {"\n\n"}
                En esta sección encontrarás una amplia lista de árboles, frutos, semillas, 
                hierbas y arbustos que se pueden encontrar en comunidades totonacas de la 
                Sierra Nororiental de Puebla. Te compartimos su nombre en idioma tutunakú, 
                incluyendo su escritura y audios para practicar su pronunciación en la 
                variante central del Sur. También, encontrarás su nombre científico, su 
                nombre en español y los usos tradicionales que le dan en las comunidades. 
                Te recomendamos observar a detalle la siguiente iconografía:
            </Text>
            
            <Boton title="Frutos, semillas o raíces" /*onPress={() => navigation.navigate('Gramatica')}*/ />
            <Boton title="Herbáceas " />
            <Boton title="Árboles" />
        </View>
        </ScrollView>
    );
}

export default Plantas;