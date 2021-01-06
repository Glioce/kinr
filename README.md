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

una ejemplo elegido al azar, pero parece interesante y complicado  
https://github.com/GetStream/stream-chat-react-native  

Se inició un proyecto vacío para probar  
```npx react-native init AwesomeProject```  

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
```adb devices```
Aceptar permiso en el teléfono  
```
$ adb devices
List of devices attached
LMX430UCW8AIMFLJ5T      device
```
Se usarán dos terminales, en las dos entrar al directorio de la app
(react-native solo funciona correctamente en la carpeta del usuario actual).  
En la primera terminal ejecutar Metro  
```npx react-native start```  
En la segunda terminal ejecutar la app  
```npx react-native run-android```  
Editar App.js, los cambios se reflejan en pocos segundos, si no, presionar R.  

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

## Usar fuentes personalizadas
Revisar la siguiente guía
https://medium.com/@mehrankhandev/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4  
Es necesario reiniciar el packer, si las fuentes se instalaron mientras se depura la app.  

Estas son las fuentes que están pre-instaladas  
https://github.com/react-native-training/react-native-fonts  

## Notas
Comentar elemento en JSX  
```
{/*comment here*/}
```

Solucionar error EPERM  
http://bitstopixels.blogspot.com/2017/04/react-native-windows-10-eperm-operation.html  

Extensiones de VSCode  
https://medium.com/react-native-training/vscode-for-react-native-526ec4a368ce  

Formatos de assets (extensiones de archivo)  
https://github.com/facebook/metro/blob/master/packages/metro-config/src/defaults/defaults.js  

Experimentar con layout de forma interactiva  
https://yogalayout.com/playground/  
