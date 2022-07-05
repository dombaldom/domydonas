export interface Configuracion {
    appHelloWorld: string;
    // url autenticacion, firma y registro
    AUTHENTICATE_API_SIGNIN: string;
    AUTHENTICATE_API_SIGNUP: string;
    
    // constantes para tokens
    TOKEN_HEADER_KEY: string;
    TOKEN_KEY: string;
    USER_KEY: string;
    
    //url modulo de usuarios
    GET_ALL_USER_URL: string;

    //url modulo roles
    GET_ALL_ROLE_URL: string;
}
