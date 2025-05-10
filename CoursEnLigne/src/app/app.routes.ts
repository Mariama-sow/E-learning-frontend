import { Routes } from '@angular/router';
import path from 'node:path';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ConnexionComponent } from './composants/connexion/connexion.component';
import { InscriptionComponent } from './composants/inscription/inscription.component';

export const routes: Routes = [

    
    {
        path:"", component:AccueilComponent, pathMatch: 'full' 
    },
    //{ path: '', redirectTo: '/accueil', pathMatch: 'full' },
    {
        path:"connexion", component:ConnexionComponent
    },
    {
        path:"inscription", component:InscriptionComponent
    }
];
