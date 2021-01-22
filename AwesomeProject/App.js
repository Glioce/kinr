/**
 * Kintachuwin App
 * Editado desde Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * @format
 * @flow strict-local
 */

// Importar todo los necesario ==========================================================
//import 'react-native-gesture-handler'; //para terminar instalación de este modulo?
import React from 'react'; //estrictamente necesario
import { NavigationContainer } from '@react-navigation/native'; //navegación contenedor
import { createStackNavigator } from '@react-navigation/stack'; //navegación stack
import Sound from 'react-native-sound'; //para reproducir sonidos
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native'; //varios elementos

// Sonido ===========================================================================
Sound.setCategory('Playback', false);

function playLocalSound() {
  //Sound.stop();
  Sound.setCategory('Playback', false);
  var mySound = new Sound('_1gram_1graf.mp3', Sound.MAIN_BUNDLE, (error)=>{
    if(error) {
      console.log('Error al cargar: '+error);
      return;
    }
    else {
      mySound.play((success)=>{
        if(success){
          console.log('Sonando');
        }
        else {
          console.log('Problema al tocar');
        }
      })
    }
  });
  mySound.setVolume(0.9);
  mySound.release();
}

// Youtube =================================================================================
//import YoutubePlayer from 'react-native-youtube-iframe' //para insertar video de youtube
//import YouTube, { YouTubeStandaloneIOS, YouTubeStandaloneAndroid } from 'react-native-youtube';

// Pantallas - Screens ==================================================================================
//import Externo from './_externo';
import Portada from "./src/_00_portada";
import Principal from "./src/_01_principal";

import Gramatica from "./src/_10_gramatica";
import Numeros from "./src/_20_numeros";
import Vocabulario from "./src/_30_vocabulario";
import Animales from "./src/_40_animales";
import Plantas from "./src/_50_plantas";
import Audiovisuales from "./src/_60_audiovisuales";
import Cuentos from "./src/_70_cuentos";
import Galeria from "./src/_80_galeria";
import Conocenos from "./src/_90_conocenos";

const Stack = createStackNavigator();

// App principal ====================================================================================
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      {/*<StatusBar barStyle="light-content" />*/}
      <Stack.Navigator initialRouteName="Portada" /*headerMode="none"*/>
        <Stack.Screen name="Portada" component={Portada} />
        <Stack.Screen name="Principal" component={Principal} />

        <Stack.Screen name="Gramatica" component={Gramatica} />
        <Stack.Screen name="Numeros" component={Numeros} />
        <Stack.Screen name="Vocabulario" component={Vocabulario} />
        <Stack.Screen name="Animales" component={Animales} />
        <Stack.Screen name="Plantas" component={Plantas} />
        <Stack.Screen name="Audiovisuales" component={Audiovisuales} />
        <Stack.Screen name="Cuentos" component={Cuentos} />
        <Stack.Screen name="Galeria" component={Galeria} />
        <Stack.Screen name="Conocenos" component={Conocenos} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Estilos ======================================================================================
/*
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontFamily: "OpenSans-Regular",
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    fontFamily: "Purisa",
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
*/

// export final -----------------------------------------------------------------------------
export default App;
