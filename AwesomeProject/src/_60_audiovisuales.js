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

function Audiovisuales({ navigation }) {
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
            
            {/*************************************************************************/}
            <Boton title="CD1" />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                <Text style={{fontStyle:'italic', fontWeight:'normal'}}>KINTACHIWINKAN</Text>
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                En Tuxtla, comunidad de la Sierra Norte de Puebla, el tutunakú  es
                un idioma vivo, la voz de niños, jóvenes y adultos, un idioma que
                retiembla en los altavoces del pueblo cada día; es la voz de los padres, 
                del recuerdo y del presente. Mientras que para las personas de la 
                tercera edad, aprender español fue una cuestión de supervivencia, para 
                las nuevas generaciones, preservar el tutunakú es resistir a un mundo cambiante.
                {"\n\n"}
                Dirección y guión: Jorge Ramos Luna y Juan M. Díaz García {"\n"}
                Producción: Colectivo Xanay {"\n"}
                Fotografía y edición: Jorge Ramos Luna {"\n"}
                Sonido directo: Uzu Morales {"\n"}
                Asistencia de producción: Citlal Solano {"\n"}
                Año: 2021
            </Text>

            {/*************************************************************************/}
            <Boton title="CD2" />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                <Text style={{fontStyle:'italic', fontWeight:'normal'}}>TSURUMPITPIT</Text>
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                En comunidades totonacas de la Sierra Norte de Puebla, el canto del 
                Tsurumpitpit [onomatopeya totonaca] acompaña las noches nubladas y 
                lluviosas desde tiempos remotos. Sin embargo, entre las personas existe
                incertidumbre sobre la identidad del animal que emite este canto tan 
                particular. Este fenómeno se repite en diferentes lugares del centro de 
                México, donde dos tipos de anfibios cohabitan cerca de las personas. Un 
                anfibio es más fácil de observar que el otro, pero ¿quién es el que canta?
                {"\n\n"}
                Dirección: Juan M. Díaz García y Jorge Ramos Luna{"\n"}
                Producción: Colectivo Xanay, FestiXal de los Anfibios y Colectivo Hojarasca{"\n"}
                Guión:  Juan M. Díaz García {"\n"}
                Fotografía y edición: Jorge Ramos Luna{"\n"}
                Sonido directo: Uzu Morales{"\n"}
                Asistencia de producción: Citlal Solano{"\n"}
                Año: 2020
            </Text>

            {/*************************************************************************/}
            <Boton title="CD3" />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                RONDALLA <Text style={{fontStyle:'italic', fontWeight:'normal'}}>TUTUNAKÚ</Text>
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Mini concierto de la Rondalla Tutunakú del Bachillerato Manuel Ávila Camacho, 
                Tuxtla, Zapotitlán de Méndez, Puebla. Esta rondalla ha sido reconocida durante 
                toda su trayectoria, recientemente recibió los premios: 1er Lugar Concurso Regional 
                en Huahuaxtla (Categoría A, 2020), 1er Lugar Concurso Estatal en Teziutlán 
                (Categoría A, 2019), y 1er Lugar Concurso Regional en Huehuetla (Categoría A, 2019).
                {"\n\n"}
                Realización, cámara y edición: Jorge Ramos Luna{"\n"}
                Segunda cámara: Juan M. Díaz García{"\n"}
                Producción: Colectivo Xanay{"\n"}
                Sonido directo: Uzu Morales{"\n"}
                Asistencia de producción: Citlal Solano{"\n"}
                Año: 2020
            </Text>

            {/*************************************************************************/}
            <Boton title="CD4" />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                <Text style={{fontStyle:'italic', fontWeight:'normal'}}>PAXNIKAK</Text>
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Doña Fabiola y su hijo Ismar nos muestran el proceso de recolección y preparación 
                del paxnikak, un quelite silvestre perteneciente a la especie Xanthosoma robustum. 
                El paxnikak es uno de los platillos principales de la cocina tradicional totonaca.
                {"\n\n"}
                Dirección y edición: Juan M. Díaz García{"\n"}
                Producción: Colectivo Xanay{"\n"}
                Asistencia de producción y sonido directo: Citlal Solano{"\n"}
                Año: 2020
            </Text>

            {/*************************************************************************/}
            <Boton title="CD5" />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                DANZAS DE LA SIERRA NORTE DE PUEBLA
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Miniclip de diferentes danzas que se bailan durante las fiestas patronales 
                en diferentes comunidades de la Sierra Norte de Puebla. Algunas de las que 
                mostramos son "Los Tejoneros", "Los voladores", "Los negritos", "Los quetzales" 
                y "Los españoles", las cuales fueron grabadas en Nanacatlán, Zoatecpan y 
                San Juan Ozelonacaxtla.
                {"\n\n"}
                Dirección y edición: Juan M. Díaz García{"\n"}
                Producción: Colectivo Xanay{"\n"}
                Año: 2019
            </Text>

            {/*************************************************************************/}
            <Boton title="CD6" />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                ANIMALES EN TOTONACO
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Video elaborado como reporte final del curso “Enseñanza de la lengua Tutunakú” en 
                su nivel inicial a cargo de la Academia Veracruzana de Lenguas Indígenas (AVELI).
                {"\n\n"}
                Dirección y edición: Juan M. Díaz García{"\n"}
                Producción: Colectivo Xanay{"\n"}
                Año: 2019
            </Text>

            {/*************************************************************************/}
            <Boton title="CD7" />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                ALIMENTOS EN TOTONACO
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Video elaborado como reporte final del curso “Enseñanza de la lengua Tutunakú” en 
                su nivel inicial a cargo de la Academia Veracruzana de Lenguas Indígenas (AVELI).
                {"\n\n"}
                Dirección y edición: Juan M. Díaz García{"\n"}
                Producción: Colectivo Xanay{"\n"}
                Año: 2019
            </Text>
            
            <Boton title="X" /*onPress={() => navigation.navigate('Gramatica')}*/ />

        </View>
        </ScrollView>
    );
}

export default Audiovisuales;