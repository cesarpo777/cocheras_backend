# Cocheras Backend :car:

## 馃搵Tabla de contenidos

* Descripci贸n
* Instalaci贸n
* Uso y documentaci贸n
* Tecnolog铆as
* Autor

## :scroll:Descripci贸n

Cocheras backend, es un backend creado para una app cliente llamada "Park now", 
que permite buscar cocheras/estacionamientos cercanos a un punto de referencia enviado por un usuario.
La app se encuentra desplegada en el siguiente dominio

:link:https://parking-now.herokuapp.com/

Servicios brindados:

Como usuario:

* Registro y autenticaci贸n con tokens de acceso
* CRUD con veh铆culos solo apto para el usuario que lo cre贸
* CRUD con cocheras solo apto para el usuario que la cre贸
* Consulta sobre cocheras/estacionamientos cercanos

Como administrador

* Registro y autenticaci贸n con tokens de acceso
* Consulta sobre cocheras/estacionamientos cercanos
* Ver todos los veh铆culos/usuarios activos o inactivos


## :arrow_double_down:Instalaci贸n

Clonar el proyecto e instalar dependencias

```sh
  git clone https://github.com/cesarpo777/cocheras_backend.git
```

```sh
  npm install
```

## 馃搧Uso y documentaci贸n

Crea un archivo .env  usando como ejemplo el .env.example

```sh
PORT= Puerto donde va a correr la app
PRIVATE_KEY= Clave para firmar los tokens
DB_CNN: String de conexi贸n a tu base de datos
GEOCODER_PROVIDER= Proveedor de geolocalizaci贸n
GEOCODER_API_KEY= Clave de acceso a tu proveedor de geolocalizaci贸n

```
Para ver documentaci贸n y probar endpoints importar los archivos de la carpeta postman en software de postman

## 馃専Tecnolog铆as

* Express
* Express validator
* bcrypt
* jsonwebtoken
* mongoose
* mongodb
* cors
* dotenv
* node-geocoder

El proyecto actualmente esta alojado en:

:link:https://cocheras-backend.herokuapp.com/

---

## 馃摑Autor

C茅sar Muzio

Donde encontrarme:

| Github | LinkedIn |
| ----- |-------|
| [Github](https://github.com/cesarpo777)  | [LinkedIn](https://www.linkedin.com/in/c%C3%A9sar-muzio/)|
