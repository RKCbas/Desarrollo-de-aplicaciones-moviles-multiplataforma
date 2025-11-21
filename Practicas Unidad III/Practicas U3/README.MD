# Practicas

## Instalación

npm i

crear .env a partir de .env.template

## Readme temporal

La configuración de Expo Router en tu proyecto se define principalmente por dos cosas:

Archivo raíz en package.json
La línea "main": "expo-router/entry" indica que Expo Router gestiona el punto de entrada de tu app.

Carpeta app
Expo Router usa la estructura y los archivos dentro de la carpeta app para definir las rutas y la navegación.

Cada archivo .tsx en app es una ruta.
Los archivos _layout.tsx definen layouts y navegación para grupos de rutas.
Puedes crear subcarpetas para rutas anidadas, modales, tabs, etc.
No hay un archivo de configuración específico para Expo Router. Todo se basa en la estructura de la carpeta app.

Si quieres ver o modificar la navegación, revisa y edita los archivos dentro de la carpeta app. Por ejemplo, _layout.tsx y index.tsx.
