import dotenv from 'dotenv';
dotenv.config();

const { UGA_APP_NAME: NAME, UGA_APP_PORT: APP_PORT, UGA_APP_DB_URL: DB_URL, UGA_APP_JWT_TOKEN_SECRET: JWT_TOKEN_SECRET, UGA_APP_APP_URL: APP_URL, UGA_APP_APP_COOKIE_NAME: APP_COOKIE_NAME } = process.env;

class ENV {
    static NAME = NAME ?? "Test";
    static APP_PORT = APP_PORT ?? 1001;
    static APP_URL = APP_URL ?? "http://localhost:3000";
    static DB_URL = DB_URL ?? "mongodb://localhost/test";
    static JWT_TOKEN_SECRET = JWT_TOKEN_SECRET ?? "secret";
    static APP_COOKIE_NAME = APP_COOKIE_NAME ?? "TOKEN";
}

export default ENV;