import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { AdmtalleresComponent } from './pages/admtalleres/admtalleres.component';
import { AdmusuariosComponent } from './pages/admusuarios/admusuarios.component';
import { AdmcontactComponent } from './pages/admcontact/admcontact.component';
import { ActperfilComponent } from './pages/actperfil/actperfil.component';
import { TustalleresComponent } from './pages/tustalleres/tustalleres.component';

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
    {
        path: 'administrar-talleres',
        title: 'Administrar Talleres',
        component: AdmtalleresComponent,
    },
    {
        path: 'administrar-usuarios',
        title: 'Administrar Usuarios',
        component: AdmusuariosComponent,
    },
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
