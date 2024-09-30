export class ContactoModel {
    constructor(
        public nombre: string,
        public telefono: string,
        public correo: string,
        public descripcion: string,
        public detalles: string,
        public createdAt?: Date,
    ) {}
}