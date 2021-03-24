# Dracub

## _Boilerplate for REST_ server

`THIS PROJECT IS EXPERIMENTAL AND DEVELOPED BY CAVE MAN, USE AT YOUR OWN RISK`

This is an attempt at making a usable and minimal REST api based server with express, jwt and mongodb. It doesn't support any views or templating languages for them by it self but it can be easilly added.
## Features
- Multiple server support with different ports and domain names.
- JWT authentication across all servers.

## Plan
- Https support
- Better structure and bug fixes in general

## File structure
```
-src
    -apps
        -AuthApp
            -controllers // CONTROLLERS FOR ROUTER
            -middleware // MIDDLEWARE FOR EXPRESS
            -models // MODELS FOR CONTROLLERS
            -routers // ROUTER FOR APP
            .App.js // ADD ROUTERS TO MAIN APP AND EXPORT
            .Database.js // DATABASE CONNECTION FOR MODELS
            .ENV.js // DEFAULT VALUES FOR ENV
        -ExampleApp
    -MasterApp // APP CLASS THAT ALL OF YOUR APPS USE
    -Utils
.index.js // IMPORT App.js FROM APPS FOLDER AND RUN THEM HERE
```

## Commands
- npm start # Starts index.js with node
- npm run dev # Starts index.js with nodemon
- npm run make:app example # Creates a new app in your apps folder

## Example ENV file setup
_.env files must be created in the same folder as index.js_
```
AUTH_APP_NAME=Auth
AUTH_APP_PORT=1000
AUTH_APP_URL=http://localhost:3000
AUTH_APP_COOKIE_NAME=TOKEN
AUTH_APP_DB_URL=mongodb://localhost/users
AUTH_APP_JWT_TOKEN_SECRET=secret

UGA_APP_NAME=Uga
UGA_APP_PORT=1001
UGA_APP_URL=http://localhost:3000
UGA_APP_COOKIE_NAME=TOKEN
UGA_APP_DB_URL=mongodb://localhost/test
UGA_APP_JWT_TOKEN_SECRET=secret
```