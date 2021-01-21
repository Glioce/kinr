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

function Galeria({ navigation }) {
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
                FF1
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                Jorge Ramos Luna
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                El Akgpixi o mejor conocido como Cozoltepetl, es la montaña más alta de la Sierra Norte de Puebla. Este cerro es de alto valor biológico y cultural
            </Text>

            {/*<Image source={require('../assets/logo.png')} 
                style={{width:320, height:60}} resizeMode='contain'
            />*/}
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                FF2
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                Juan M. Díaz García
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Preparacion del nixtamal para la elaboración de tortilla. Uno de los principales alimentos en la Sierra Norte de Puebla
            </Text>

            {/*<Image source={require('../assets/logo.png')} 
                style={{width:320, height:60}} resizeMode='contain'
            />*/}
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                FF3
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                Juan M. Díaz García
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Preparacion de Paxnikak. Es uno de los alimentos tradicionales del totonacapan en la Sierra Norte de Puebla. Las hojas deben desvenarse para evirtar escosor al comerse.
            </Text>

            {/*<Image source={require('../assets/logo.png')} 
                style={{width:320, height:60}} resizeMode='contain'
            />*/}
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                FF4
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                Citlal Solano Lara
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Oracion y misa en el panteon para la celebracion del santune, santujni o santunu (todos santos)
            </Text>
            
            <Boton title="X" /*onPress={() => navigation.navigate('Gramatica')}*/ />
        </View>
        </ScrollView>
    );
}

export default Galeria;