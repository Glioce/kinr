//------------------------------------------------------------------------
/*
const playLocalSound = () => {
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
  */

  //------------------------------------------------------------------------
  /*
  const playRemoteURLSound = () => {
    Sound.setCategory('Playback', false);
    var myRemoteSound = new Sound('https://www.soundjay.com/ambient/sounds/boarding-accouncement-1.mp3', null, (error) => {
      if (error) {
        console.log(error);
        return;
      } else {
        myRemoteSound.play((success) => {
          if (success) {
            console.log('Sound playing')
          } else {
            console.log('Issue playing file');
          }
        })
      }
    });
    myRemoteSound.setVolume(0.9);
    myRemoteSound.release();
  }
  */

  //--------------------------------------------------------------------------------
  /*
  state = {
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: true,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    playerWidth: Dimensions.get('window').width,
  };
  */

  function Welcome() {
      return (
        <SafeAreaView style={{flex:1}}>
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

          
          <YoutubePlayer 
            height={480}
            videoId={"bXFEaZZghTA"}//"sNhhvQGsMEc"} 
            initialPlayerParams={{
              controls:1,
              showClosedCaptions:0,
              iv_load_policy:3,
              modestbranding:1,
            }}
          />
          

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step Oone</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
								How is the header loaded? The text "Welcome to React"
								is not written in App.js.
                That´s because is a cat component defined in some library.
              </Text>
              <Button title="Press Me" color="orange" onPress={() => {alert('auxilio');}} />
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
                <Button title="Press Me" onPress={() => {alert('mentira');}} />
              </Text>
              
              <TouchableOpacity style={{backgroundColor:'lightgrey',justifyContent:'center'}} onPress={()=>playLocalSound()}>
                <Text style={{textAlign:'center',fontSize:18,color:'black',padding:5, fontFamily:"Purisa"}}>Play sound from local file</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>

              <TouchableOpacity style={{backgroundColor:'grey',justifyContent:'center'}} onPress={()=>playRemoteURLSound()}>
                <Text style={{textAlign:'center',fontSize:20,color:'white',padding:10}}>Play sound from remote url</Text>
              </TouchableOpacity>
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