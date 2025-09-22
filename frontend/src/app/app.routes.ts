import { Routes } from '@angular/router';
import { Login } from './paginas/login/login';
import { Dashboard } from './paginas/dashboard/dashboard';
import { Teoria } from './paginas/teoria/teoria';
import { Desafio } from './paginas/desafio/desafios';
import { Errores } from './paginas/errores/errores';
import { Comandos } from './paginas/comandos/comandos';

export const routes: Routes = [

    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path:'login',
        component: Login
    },
    {
        path:'dashboard',
        component: Dashboard,
        children: [
            {
                path: 'teoria',
                component: Teoria
            },
            {
                path: 'desafios',
                component: Desafio
            },
            {
                path: 'errores',
                component: Errores
            },
            {
                path: 'comandos',
                component: Comandos
            }
        ]
    }
];