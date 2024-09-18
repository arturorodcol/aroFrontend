import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { AdmcontactComponent } from './pages/admcontact/admcontact.component';
import { ActperfilComponent } from './pages/actperfil/actperfil.component';
import { TustalleresComponent } from './pages/tustalleres/tustalleres.component';
import { VerUsuariosComponent } from './pages/admusuarios/ver-usuarios/ver-usuarios.component';
import { VerTalleresComponent } from './pages/admtalleres/ver-talleres/ver-talleres.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Talleres',
        component: HomeComponent,
    },
    {
        path: 'sobre-nosotros',
        title: 'Sobre Nosotros',
        component: AboutComponent,
    },
    {
        path: 'contacto',
        title: 'Contacto',
        component: ContactComponent,
    },
    {
        path: 'iniciar-sesion',
        title: 'Iniciar Sesión',
        component: LoginComponent,
    },
    // Ruta para ver talleres y crear talleres 
    // {
    //     path: 'administrar-talleres',
    //     title: 'Administrar Talleres',
    //     component: VerTalleresComponent,
    // },
    // {
    //     path: 'administrar-talleres',
    //     title: 'Administrar Talleres',
    //     // component: 
    // },
    // // Agregar ruta para ver usuarios y crear usuarios 
    {
        path: 'administrar-usuarios',
        title: 'Mis Usuarios',
        component: VerUsuariosComponent,
    },
    // {
    //     path: 'administrar-usuarios',
    //     title: 'Administrar Talleres',
    //     // component: 
    // },
    {
        path: 'administrar-contactos',
        title: 'Administrar Contactos',
        component: AdmcontactComponent,
    },
    {
        path: 'actualizar-perfil',
        title: 'Actualizar perfil',
        component: ActperfilComponent,
    },
    {
        path: 'tus-talleres',
        title: 'Tus talleres',
        component: TustalleresComponent,
    }
];
