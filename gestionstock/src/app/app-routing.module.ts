import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent}from './pages/page-login/page-login.component';
import {PageInscriptionComponent}from './pages/page-inscription/page-inscription.component';
import {PageDashbordComponent}from './pages/page-dashbord/page-dashbord.component';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';
import { PageArticleComponent } from './pages/article/page-article/page-article.component';
import { NouvelArticleComponent } from './pages/article/nouvel -article/nouvel-article/nouvel-article.component';
import { PageMvtstkComponent } from './pages/MVTSTK/page-mvtstk/page-mvtstk.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournissieur/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrdComponent } from './composants/nouveau-clt-frd/nouveau-clt-frd.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageGategorieComponent } from './pages/Gategorie/page-gategorie/page-gategorie.component';
import { NouvelleGategorieComponent } from './pages/fournissieur/page-fournisseur/nouvelle-gategorie/nouvelle-gategorie.component';
import { PageUtilisateurComponent } from './pages/Gategorie/page-utilisateur/page-utilisateur.component';
import { NouvelleUtilisateurComponent } from './pages/Gategorie/nouvelle-utilisateur/nouvelle-utilisateur.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePassComponent } from './pages/profil/changer-mot-de-pass/changer-mot-de-pass.component';
const routes: Routes = [
  {
    path:'login', 
    component:PageLoginComponent
  },
  {
    path:'inscrire', 
    component:PageInscriptionComponent
  },
  
  {
    path:'', 
    component:PageDashbordComponent,
    children: [
      {
      path:'statistiques',
      component:PageStatistiqueComponent
    },
    {
      path:'articles',
      component:PageArticleComponent
    },
    {
      path:'nouvelarticle',
      component:NouvelArticleComponent
    },
    {
      path:'mvtstk',
      component:PageMvtstkComponent
    },
    {
      path:'clients',
      component:PageClientComponent
    },
    {
      path:'nouveau client',
      component:NouveauCltFrdComponent,
      data : {
        origin: 'client'
      }
    },
    {
      path:'commandesclient',
      component:PageCmdCltFrsComponent,
      data : {
        origin: 'client'
      }
    },
    {
      path:'nouvelcommandesclient',
      component:NouvelleCmdCltFrsComponent,
      data : {
        origin: 'client'
      }
    },
    {
      path:'fournisseurs',
      component:PageFournisseurComponent
    },
    {
      path:'nouveau fournisseur',
      component:NouveauCltFrdComponent,
      data : {
        origin: 'fournisseur'
      }
    },
    {
      path:'commandesfournisseur',
      component:PageCmdCltFrsComponent,
      data : {
        origin: 'fournisseur'
      }
    },
    {
      path:'nouvelcommandesfournisseur',
      component:NouvelleCmdCltFrsComponent,
      data : {
        origin: 'fournisseur'
      }
    },
    {
      path:'Gategorie',
      component:PageGategorieComponent
    },
    {
      path:'nouvelGategorie',
      component:NouvelleGategorieComponent
    },
    {
      path:'utilisateurs',
      component:PageUtilisateurComponent
    },
    {
      path:'nouvellle utilisateur',
      component:NouvelleUtilisateurComponent
    },
    {
      path: 'profil',
      component:PageProfilComponent
      
    },
    {
      path: 'changermotdepasse',
      component:ChangerMotDePassComponent
      
    }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }