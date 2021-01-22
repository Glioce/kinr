import React from 'react'; //estrictamente necesario
import {
  View,
  Text,
  Image,
  //Button,
  //TouchableHighlight,
  //TouchableNativeFeedback,
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

function Conocenos({ navigation }) {
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
            <Boton title="1CX" />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                Colectivo Xanay
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Somos un grupo de jóvenes que contribuyen al desarrollo social, educativo y ambiental de los pueblos originarios de la Sierra Norte de Puebla, a través de actividades que integran y respetan la riqueza biocultural.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                xanaycolectivo@gmail.com
            </Text>

            {/*************************************************************************/}
            <Boton title="ARS" />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                Abigail Rocha Soriano 
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Comercióloga egresada, feminista, voguera y creadora de contenido. Me gusta el artivismo comunitario y por los derechos LGBTTTIQ+.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                abigailrocha29@outlook.com
            </Text>

            {/*************************************************************************/}
            <Boton title="CSL" />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                Citlal Solano Lara
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Bióloga y estudiante de la Maestría en agroecologia, territorio y soberanía alimentaria. Amo la divulgación científica, aprender con las comunidades y viajar por la sierra.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                citlalsolanol@gmail.com
            </Text>

            {/*************************************************************************/}
            <Boton title="JJRS" />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                Jesús Javier Rojas Sánchez
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Diseñador gráfico y serigrafísta. Me gusta la difusión del arte, los prints, la música, la naturaleza, compartir y aprender.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                jahvierrs@gmail.com
            </Text>

            {/*************************************************************************/}
            <Boton title="JMDG" />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                Juan Manuel Díaz García
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Biólogo, Maestro en Ciencias y estudiante de Doctorado. Me gusta hacer y divulgar ciencia, ir al monte, tomar fotografías, y conocer la riqueza biocultural de las comunidades.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                juanm.diazgarcia@gmail.com
            </Text>

            {/*************************************************************************/}
            <Boton title="KPR" />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                Karina Pani Rodríguez
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
            Licenciada en Educación Preescolar. Me gusta la naturaleza, pintar, y la actividad comunitaria en diferentes grupos
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                kary16pani@gmail.com
            </Text>

            {/*************************************************************************/}
            <Boton title="VFC" />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                Verónica Flores Cortés
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Pasante en la licenciatura de física. Profesora de física y matemáticas. Amo estar con mi familia y amigos, compartir saberes, leer, la astronomía, ir a la sierra, escuchar música, hacer ejercicio y ver películas.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                vero.flores.mystic@gmail.com
            </Text>

            {/*COLABORADORES********************************************************/}
            {/*************************************************************************/}
            <Boton title="ALP" />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                Arely López Pérez
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Estudiate del bachillerato. Mi lengua materna es el Totonaco, me encanta la poesía, las matemáticas, jugar ajedrez, bailar, escuchar música, tocar con la banda de guerra en la escuela. He ganado en concursos de declamación,  ajedrez y juego de "Tsum".
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                arelylopezperez741@gmail.com
            </Text>

            {/*************************************************************************/}
            <Boton title="DFC" />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                David Figueroa Castañeda
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Abc.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                abc
            </Text>

            {/*************************************************************************/}
            <Boton title="DOXL" />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                David Octavio Xochicale León
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Diseñador, creador de contenido, apasionado por la fotografía, el cine y la música de todo género.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                davoct@gmail.com
            </Text>

            {/*************************************************************************/}
            <Boton title="GLE" />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                Gabriela Lucas Esteban
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Licenciada en Educación Preescolar y Maestra en Desarrollo Educativo. Hablo la lengua Tutunaku. Me gusta el trabajo  que realizo con los niños y niñas pequeñas porque son el cimiento de las nuevas generaciones. Me apasiona leer, escribir y estar rodeada de la naturaleza.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                gabichalukas@gmail.com
            </Text>

            {/*************************************************************************/}
            <Boton title="JRL" />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                Jorge Ramos Luna
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Biólogo, divulgador científico y realizador audiovisual. Me apasiona el cine, la primatología y la conservación de la biodiversidad.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                jor_ge_94@hotmail.com
            </Text>

            {/*************************************************************************/}
            <Boton title="JFS" />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                José Francisco Santiago
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Antropólogo lingüista. Doctor en Investigación Educativa. Me gustan las lenguas mesoamericanas, sobre todo la totonaca- tepehua, y el senderismo.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                josestgofco@gmail.com
            </Text>

            {/*************************************************************************/}
            <Boton title="RAH" />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                Rafael Alarcón Hernández
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Abc.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                abc
            </Text>
            
            <Boton title="X" /*onPress={() => navigation.navigate('Gramatica')}*/ />

        </View>
        </ScrollView>
    );
}

export default Conocenos;