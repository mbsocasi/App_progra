# Sistema control rutina

Este proyecto es un aplicacion que siguiere y acompania al usuario en la ejecuccion de rutinas para el bienestar fisico.

# Instalacion

**Para iniciar el proyecto se debe inicializar las dependencias**

```bash
npm init -y
```
## Backend  
# Modulo de express

```bash
npm i express
```
y agergar un   "type": "module", para poder usar los modulos de ema script 6 en el package.json

# Modulo de nodemon
```bash 
npm i nodemon -D
```
agregar dentro de scripts el comando dev
    "dev": "nondemon src/index.js"

ejecuta
```bash
npm run dev
```
para iniciar el servidor y este este pendiente a los cambios realizados y vuelva a lansar el servicio

# Modulo morgan 
Permite observar las peticiones que probienen del backend 
y se omporta en app.js
```js
import morgan from "morgan";
app.use(morgan("dev")); 
```


## Modelo de src
### Carpetas 
    - routes        => contiene las urls del backend
    - controlles    => avarca las funciones que se ejecutan al visitar  una url
    - models        => modelos de los datos a guardar en mongo
    - middlewares   => proteccionde rutas "Usuarios Autentificados"
    - schemas       => validacion de datos 
    -libs          => contiene codigo que se reutilizara varias veces 
    
### Archivos
    -db.js     => base de datos
    -config.js => configuracion genral
    -index.jS  => se encarga de arrancar todo
    -app.js    => servidor

- **src**
  - routes
  - controlles
  - models
  - schemas
  - libs
  - config.js
  - db.js 
  - index.js 
  - app.js 
 

# Mongo DB

```bash
npm i mongose
```