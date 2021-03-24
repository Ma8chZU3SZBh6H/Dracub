import dotenv from 'dotenv';
dotenv.config();

const { [ENV_NAME]_NAME: NAME, [ENV_NAME]_PORT: APP_PORT, [ENV_NAME]_DB_URL: DB_URL, [ENV_NAME]_JWT_TOKEN_SECRET: JWT_TOKEN_SECRET, [ENV_NAME]_APP_URL: APP_URL, [ENV_NAME]_APP_COOKIE_NAME: APP_COOKIE_NAME } = process.env;

class ENV {
    static NAME = NAME ?? "Test";
    static APP_PORT = APP_PORT ?? 80;
    static APP_URL = APP_URL ?? "http://localhost:3000";
    static DB_URL = DB_URL ?? "mongodb://localhost/test";
    static JWT_TOKEN_SECRET = JWT_TOKEN_SECRET ?? "secret";
    static APP_COOKIE_NAME = APP_COOKIE_NAME ?? "TOKEN";
}

export default ENV;