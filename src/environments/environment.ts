// Entorno de producción para confirgurar variables de entorno, se colocan las IP/EndPoint de las pais que voy a consumir, es mejor practica crear constante y llamarla en otras secciones, en lugar de llamarlas de forma individual

export const environment = {
  production: false,
  base_url: 'localhost:4200/api/v1',
};