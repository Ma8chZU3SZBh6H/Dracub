import dotenv from 'dotenv';
dotenv.config();

const { AUTH_APP_NAME: NAME, AUTH_APP_PORT: APP_PORT, AUTH_APP_DB_URL: DB_URL, AUTH_APP_JWT_TOKEN_SECRET: JWT_TOKEN_SECRET, AUTH_APP_APP_URL: APP_URL, AUTH_APP_APP_COOKIE_NAME: APP_COOKIE_NAME } = process.env;

class ENV {
    static NAME = NAME ?? "Test";
    static APP_PORT = APP_PORT ?? 1000;
    static APP_URL = APP_URL ?? "http://localhost:3000";
    static DB_URL = DB_URL ?? "mongodb://localhost/users";
    static JWT_TOKEN_SECRET = JWT_TOKEN_SECRET ?? "secret";
    static APP_COOKIE_NAME = APP_COOKIE_NAME ?? "TOKEN";
}

export default ENV;