# Dracub - ALPHA

## _Boilerplate for REST_ server

`THIS PROJECT IS EXPERIMENTAL AND DEVELOPED BY CAVE MAN, USE AT YOUR OWN RISK`

This is an attempt at making a usable and minimal REST api based server with express, jwt and mongodb. It doesn't support any views or templating languages for them by it self but it can be easilly added.
## Features
- Multiple server support with different ports and domain names.
- JWT authentication across all servers.
- Automatically sets up all of your apps with bouncer.
- Easy to use commands that create components like routers for you.

## Plan
- Https support
- Better structure and bug fixes in general
- Clean up my code.

## File structure
```
-src
    -apps
        -AuthApp
            -controllers // CONTROLLERS FOR ROUTER
            -middleware // MIDDLEWARE FOR EXPRESS
            -models // MODELS FOR CONTROLLERS
            -routers // ROUTER FOR APP
            .App.js // YOUR APP INITIALIZATION FILE
        -ExampleApp
    -vendor // FRAMEWORK SOURCE CODE
.index.js // FRAMEWORK STARTUP
```

## Commands
- `npm start` # Starts index.js with node
- `npm run dev` # Starts index.js with nodemon
- `npm run make:app app_name` # Creates a authorization app in your apps folder
- `npm run make:app app_name` # Creates a new empty app in your apps folder
- `npm run make:controller app_name controller_name` # Creates a new controller in your app folder
- `npm run make:model app_name model_name` # Creates a new model in your app folder
- `npm run make:router app_name router_name` # Creates a new router in your app folder
- `npm run make:middleware app_name middleware_name` # Creates a new middleware in your app folder

## Example ENV file setup
_.env files must be created in the same folder as index.js_
```
AUTH_APP_NAME=Auth
AUTH_APP_PORT=1000
AUTH_APP_URL=http://localhost:3000
AUTH_APP_COOKIE_NAME=TOKEN
AUTH_APP_DB_URL=mongodb://localhost/users
AUTH_APP_JWT_TOKEN_SECRET=secret

TEST_APP_NAME=Test
TEST_APP_PORT=1004
TEST_APP_URL=localhost
TEST_APP_DB_URL=mongodb://localhost/test
```