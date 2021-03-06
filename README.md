# kinr

Instalar nvm. Antes fue necesario desinstalar (por completo) node.  
https://www.nubo.eu/Install-Multiple-Node-Versions-On-Windows/  
https://docs.microsoft.com/en-us/windows/nodejs/setup-on-windows  
https://github.com/coreybutler/nvm-windows  
Ejecutar terminal como administrador al cambiar versión de node.  
No ejecutar como administrador al usar react-native.  

```
$ nvm list

  * 12.20.0 (Currently using 64-bit executable)
    10.23.0
```


Se ha seguido la documentación de React-Native  
https://reactnative.dev/docs/getting-started  
Tema alcanzado  
https://reactnative.dev/docs/navigation  
Los siguientes grupos de temas se han leído sin tratar de entenderlos:  
Inclusion, Performance.  
Tema al que se quiere llegar  
https://reactnative.dev/docs/signed-apk-android  

Ejemplos de apps hechas con React-Native  
https://github.com/ReactNativeNews/React-Native-Apps  

una ejemplo elegido al azar (interesante y complicado)  
https://github.com/GetStream/stream-chat-react-native  

Se inició un proyecto vacío para probar  
```
npx react-native init AwesomeProject
```  

---------
Checar estos temas  

https://reactnative.dev/docs/tutorial  
https://reactnative.dev/docs/style  
https://reactnative.dev/docs/flexbox  
https://reactnative.dev/docs/components-and-apis  
https://reactnative.dev/docs/navigation  
https://reactnative.dev/docs/network  
https://reactnative.dev/help  

------------
Conectar cel con depuración USB activada  
```
adb devices
```
Aceptar permiso en el teléfono  
```
$ adb devices
List of devices attached
LMX430UCW8AIMFLJ5T      device
```
Se usarán dos terminales, en las dos entrar al directorio de la app
(react-native solo funciona correctamente en la carpeta del usuario actual).  
En la primera terminal ejecutar Metro  
```
npx react-native start
```  
En la segunda terminal ejecutar la app  
```
npx react-native run-android
```  
Editar App.js, los cambios se reflejan en pocos segundos.  

Temas por estudiar
- Texto y fuentes
- Reproducir sonido
- Reproducir video de Youtube o Vimeo
- Navegar entre páginas
- Generar apk
- Subir a Google Play
- Automatizar creación de listas
las listas estás formadas por elementos parecidos pero cambian su contenido
las listas se pueden llenar indicando los nombres de los recursos que debe
tener cada componente
- Cambiar nombre de la app
- Cambiar icono de la app

## Usar fuentes personalizadas
Revisar la siguiente guía  
https://medium.com/@mehrankhandev/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4  
Es necesario reiniciar el packer, si las fuentes se instalan mientras se está depurando la app.  

Estas son las fuentes que están pre-instaladas  
https://github.com/react-native-training/react-native-fonts  

## Reproducir sonido
Esta es la librería más popular  
https://www.npmjs.com/package/react-native-sound  
https://alexb72.medium.com/how-to-add-sound-to-react-native-8ef152ba1a6  
https://stackoverflow.com/questions/53737196/how-to-play-sound-in-react-native  
¿Qué forma es mejor para no reproducir varios sonidos al mismo tiempo?  
No existe una variable estática isPlaying.  

La documentación de la librería tiene enlaces a otras librerías
de audio y video que tienen actualizaciones más recientes  
https://github.com/react-native-audio-toolkit/react-native-audio-toolkit  
https://github.com/react-native-video/react-native-video  

Otra librería (no probada)  
https://developer.aliyun.com/mirror/npm/package/react-native-sound-player  

## Repasar margin y padding
https://blog.hubspot.com/website/css-margin-vs-padding  
https://www.w3schools.com/css/css_boxmodel.asp  

## Botones  
No se puede cambiar el color de fondo del botón predefinido en react-native.
Para cambiar el estilo del botón y del texto se puede armar un botón propio.
La documentación de Button tiene un enlace al código fuente para tomarlo
como base y otro enlace a botones creados por la comunidad.  
https://reactnative.dev/docs/button  
https://js.coach/package/react-native-button  

Una forma fácil de crear un botón es usar un touchable con texto anidado.  

## Ajustar altura de imágenes automáticamente
Simple componente con ancho fijo
```
const MyImg = (props) => {
    const i = Image.resolveAssetSource(props.img);
    const r = i.height / i.width; //ratio
    const w = 320; //base width
    const h = w * r; //adjusted height
    return(
        <View>
            <Image source={props.img} style={{width:w, height:h}} />
        </View>
    );
}
```
Documentación de Image  
https://reactnative.dev/docs/image  

Ajustar al ancho de la ventana  
https://stackoverflow.com/questions/39631895/how-to-set-image-width-to-be-100-and-height-to-be-auto-in-react-native?rq=1  

## Reproducir videos de Youtube
La librería más popular para reproducir videos de Youtube es ```react-native-youtube```.
En Android es necesario tener la app de Youtube instalada. Las instrucciones son un poco complicadas.
Los videos muestran el botón de compartir y no se puede poner otro elemento encima de la zona donde se
reproduce un video.  
https://www.npmjs.com/package/react-native-youtube  

Aquí mencionan 3 opciones. La primera es ```react-native-webview``` que solo
reproduce videos sin copyright. La segunda es ```react-native-youtube```
que a veces necesita permisos y tener la app de YT instalada. La tercera
es ```react-native-youtube-iframe```, solo reproduce videos sin copyright,
se ha probado y al parecer no es posible desactivar la opción de compartir
videos. La cuarta y última opción es usar ```webview``` e insertar un iframe
generado en otra página web, es demasiado complicado.  
https://surajmdurgad.medium.com/embedding-youtube-videos-in-a-react-native-app-8c556a18fd76  

La librería ```react-native-youtube-iframe``` es fácil de usar y no aparecieron
errores en las pruebas. Sin embargo, no se puede desactivar la opción de compartir
los videos y no implementa la API para recibir autorización de reproducir videos
privados.  
https://lonelycpp.github.io/2020/03/15/react-native-youtube/  
https://lonelycpp.github.io/react-native-youtube-iframe/  
Tal vez se puede ocultar información, pero no parece fácil, algunas soluciones ya no funcionan  
https://stackoverflow.com/questions/33373880/is-it-possible-to-only-remove-the-watch-later-and-share-buttons-from-youtube  
https://www.qualtrics.com/community/discussion/9551/how-to-get-rid-of-information-watch-later-and-share-at-the-top-of-a-youtube-video-and-logo  
https://www.embedplus.com/how-to-disable-the-watch-later-and-share-buttons-on-youtube-embeds.aspx  

Una solución fácil para no poder compartir, es bloquear la parte superior de la zona del video
con un elemento touchable transparente.  
https://github.com/LonelyCpp/react-native-youtube-iframe/issues/11

## Reproducir videos de Vimeo
La segunda opción es Vimeo. Solo hay una librería  
https://github.com/Myagi/react-native-vimeo  
Utiliza una página de Github para comunicarse con la API de Vimeo. No se ha probado.  

Parece complicado  
https://www.reddit.com/r/reactnative/comments/bfuwcx/react_native_vimeo_android/  
https://stackoverflow.com/questions/53220524/how-to-play-vimeo-videos-in-react-native  

Integrar videos de otras fuentes debe se más difícil.  

## Navegar entre páginas
El método más común para navegar entre páginas (o pantallas) es React Navigation.
Se intala como un conjunto de extensiones.

Las páginas se pueden construir como una función o como una clase, igual que la app principal.
Si es una función, recibe como parámetro un objeto `{navigation}`.

Se pueden definir páginas en diferentes archivos y después importar en el archivo original  
https://github.com/react-navigation/react-navigation/issues/1241  

El archivo que define la página debe tener estos elementos  
```
import React from 'react'; //estrictamente necesario
import { ... } from 'react-native'; //componentes contenedores

function NombreDePagina({ navigation }) {
    return (
        <View>
            ...
        </View>
    );
}

export default NombreDePagina;
```
Después se importa en el archivo principal y se agrega a la función principal dentro de un elemento Stack.Screen
```
import NombreDePagina from './_archivo';
...
<Stack.Screen name="NombreParaMostrar" component={NomreDePagina} />
```

## Crear APK
La documentación tiene instrucciones para generar un Android App Bundle y 
publicar en Google Play, sin embargo el archivo que se obtiene es un .aab  
https://reactnative.dev/docs/signed-apk-android  

Con estas instrucciones se puede generar un .apk  
https://dev.to/nitish173/how-to-generate-a-debug-apk-in-react-native-1gdg  
```
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

cd android

./gradlew assembleDebug
```
Al terminar, el archivo se encuentra en `yourProject/android/app/build/outputs/apk/debug/app-debug.apk`  

Aquí hay instrucciones parecidas a las de la documentación con explicaciones más extensas  
https://www.instamobile.io/android-development/generate-react-native-release-build-android/  

## Cambiar icono de app Android
Cambiar las imagenes de las carpetas mipmap* que se encuentran en 
**YourProject/android/app/src/main/res  
https://aboutreact.com/react-native-change-app-icon/
El tutorial recomienda usar https://makeappicon.com, deben existir muchas alternativas a esa página.  

Los tamaños de los iconos por default van de 48x48px a 192x192px.  

## Notas
Comentar elemento en JSX  
```
{/*comment here*/}
```

Solucionar error EPERM  
http://bitstopixels.blogspot.com/2017/04/react-native-windows-10-eperm-operation.html  
```
cd android
./gradlew clean
```

Extensiones de VSCode  
https://medium.com/react-native-training/vscode-for-react-native-526ec4a368ce  

Formatos de assets (extensiones de archivo)  
https://github.com/facebook/metro/blob/master/packages/metro-config/src/defaults/defaults.js  

Experimentar con layout de forma interactiva  
https://yogalayout.com/playground/  
