# London-bus-stops-test

Aplicación para mostrar estaciones de autobuses en el área metropolitana de Londres utilizando su api pública [TFL](https://api.tfl.gov.uk/).

## Instalación y ejecución

Se necesita un fichero `.env.local` para ejecutarlo en local con las siguientes variables:

```sh
VITE_API_TFL={URL HOST DEL API TFL}
VITE_APP_ID_TFL={ID APLICACIÓN DADA DE ALTA EN TFL API}
VITE_APP_KEY_TFL={APP KEY DE TFL}
```

Ejecutar los siguientes comandos para instalar las dependencias y ejecutar el proyecto

```sh
npm install
npm run dev
```

El proyecto arrancará en el puerto `3000` de la máquina, puede acceder mediante *http://localhost:3000*

Se basa en un enuncidado de prueba técnica en la que pedía realizar una aplicación web / mobile que para mostrar las estaciones de autobuses en el área metropolitana de Londres, con marcadores, en un mapa utilizando el API de Google Maps y tecnología web libre. En este caso se ha utilizado React con Vite para el desarrollo.

La librería de Google Maps se carga desde el fichero `index.html` donde viene un API KEY para poder utilizarla. Este API KEY es personal por lo tanto sólo se puede hacer uso dentro de la aplicación original alojada en <https://london-bus-stops-test.vercel.app/>
