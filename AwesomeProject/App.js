/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// Importar todo los necesario ==========================================================
import 'react-native-gesture-handler'; //para terminar instalación de este modulo?
import React from 'react'; //estrictamente necesario
import { NavigationContainer } from '@react-navigation/native'; //navegación contenedor
import { createStackNavigator } from '@react-navigation/stack'; //navegación stack
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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'; //varios elementos pre-armados

import Sound from 'react-native-sound'; //para reproducir sonidos
import YoutubePlayer from 'react-native-youtube-iframe' //para insertar video de youtube
//import YouTube, { YouTubeStandaloneIOS, YouTubeStandaloneAndroid } from 'react-native-youtube';

// Funcion para reproducir sonido local =============================================================
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

// Pantallas - Screens
//import Intro from "./_0_intro";
// pantalla intro =======================================================================================
function Intro({ navigation }) {
  //export default class Intro extends React.Component {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white', padding:20 }}>
      <Text style={{ fontSize: 42 }}>Introooo</Text>
      <Button title="Siguiente" style={{marginTop:10, padding:10,}}
        onPress={() => navigation.navigate('Welcome')}
        //onPress={() => navigation.push('Intro')}
      />
      <Button title="Go to Home" style={{marginTop:5}} onPress={() => navigation.navigate('Intro')} />
      <Button title="Go back" style={{marginTop:5}} onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

// pantalla welcome ======================================================================================
function Welcome({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Header />
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
        <View style={styles.body}>

          {/*<YoutubePlayer
            height={480}
            videoId={"bXFEaZZghTA"}//"sNhhvQGsMEc"} 
            initialPlayerParams={{
              controls: 1,
              showClosedCaptions: 0,
              iv_load_policy: 3,
              modestbranding: 1,
            }}
          />*/}

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Step Oone</Text>
            <Text style={styles.sectionDescription}>
              Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
            How is the header loaded? The text "Welcome to React"
            is not written in App.js.
            That´s because is a cat component defined in some library.
          </Text>
            <Button title="Press Me" color="orange" onPress={() => { alert('auxilio'); }} />
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>See Your Changes</Text>
            <Text style={styles.sectionDescription}>
              <ReloadInstructions />
              <Button title="Press Me" onPress={() => { alert('mentira'); }} />
            </Text>

            <TouchableOpacity style={{ backgroundColor: 'lightgrey', justifyContent: 'center' }} onPress={() => playLocalSound()}>
              <Text style={{ textAlign: 'center', fontSize: 18, color: 'black', padding: 5, fontFamily: "Purisa" }}>Play sound from local file</Text>
          </TouchableOpacity>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Debug</Text>
            <Text style={styles.sectionDescription}>
              <DebugInstructions />
            </Text>

            {/*<TouchableOpacity style={{ backgroundColor: 'grey', justifyContent: 'center' }} onPress={() => playRemoteURLSound()}>
              <Text style={{ textAlign: 'center', fontSize: 20, color: 'white', padding: 10 }}>Play sound from remote url</Text>
        </TouchableOpacity>*/}
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Learn More</Text>
            <Text style={styles.sectionDescription}>
              Read the docs to discover what to do next:
          </Text>
          </View>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

// stack navegacion --------------------------------------------------------------------------------
const Stack = createStackNavigator();
//const Tab = createTabNavigator();

// App principal ====================================================================================
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      {/*<StatusBar barStyle="light-content" />*/}
      <Stack.Navigator initialRouteName="Intro" /*headerMode="none"*/>
        <Stack.Screen 
          name="Intro"
          component={Intro}
          options={{
            title: 'Introooo',
            headerRight: () => (
              <Button
                title="Botón"
                onPress={() => alert('¡un montón de props en header!')}
              />
            ),
            headerStyle: {
              backgroundColor:'#29F',
            },
            headerTintColor:'white',
            headerTitleStyle: {
              fontFamily:'OpenSans-Reguar',
            }
          }}
        />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Estilos ======================================================================================
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

// esport final -----------------------------------------------------------------------------
export default App;
