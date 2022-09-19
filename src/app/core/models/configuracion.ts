// Todos las referencias se encuentran en el archivo de configuraci[on]: app.config.json
export interface Configuracion {
    appHelloWorld: string;
    // url autenticacion, firma y registro
    AUTHENTICATE_API_SIGNIN: string;
    AUTHENTICATE_API_SIGNUP: string;
    AUTHENTICATE_API_SIGNOUT: string;

    // seed para guardar en memoria browser.
    SESSION_KEY: string;
    
    // constantes para tokens
    TOKEN_HEADER_KEY: string;
    TOKEN_KEY: string;
    USER_KEY: string;
    
    // url modulo de usuarios
    GET_ALL_USER_URL: string;

    // url modulo roles
    GET_ALL_ROLE_URL: string;

    // tiempo de espera en los mensajes de loading.
    ESPERA: number;
}
