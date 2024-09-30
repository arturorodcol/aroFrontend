export interface Usuario {
    _id: string,
    nombre: string;
    email:  string; 
    tipoDocumento:  string;
    numeroDocumento:  number;
    login: string;
    password: string;
    rol: string;
    estado:  boolean;
    createdAt: Date,
}