export class TallerModel {
    constructor(
        public readonly _id: string,
        public nombre: String,
        public descripcion: String,
        public precio:  Number,
        public comentarios: String,
        public fecha: String,
        public hora: String,
        public createdAt?: Date,
        public updatedAt?: Date,
    ) {}
}