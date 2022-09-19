import { Rol } from "./rol";

export class Persona {
    id: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    nombreUsuario: string;
    password: string;
    imagen: string;
    activo: boolean;
    email: string;
    roles: Array<Rol>;

    constructor(
        id: number, nombre: string, apPat: string, apMat: string, 
        nomUser : string, password: string, img: string, 
        activo: boolean, email: string, roles: Array<Rol>
    ) {
        this.id = id;
        this.nombre = nombre;
        this.apellidoPaterno = apPat;
        this.apellidoMaterno = apMat;
        this.nombreUsuario = nomUser;
        this.password = password;
        this.imagen = img;
        this.activo = activo;
        this.email = email;
        this.roles = roles
        
    }

  


}
