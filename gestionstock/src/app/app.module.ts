import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashbordComponent } from './pages/page-dashbord/page-dashbord.component';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageArticleComponent } from './pages/article/page-article/page-article.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { ButtonActionComponent } from './composants/button-action/button-action.component';
import { NouvelArticleComponent } from './pages/article/nouvel -article/nouvel-article/nouvel-article.component';
import { PageMvtstkComponent } from './pages/MVTSTK/page-mvtstk/page-mvtstk.component';
import { DetailMvtStkArticleComponent } from './composants/detail-mvt-stk-article/detail-mvt-stk-article.component';
import { DetailMvtStkComponent } from './composants/detail-mvt-stk/detail-mvt-stk.component';
import { DetaileCltFrsComponent } from './composants/detaile-clt-frs/detaile-clt-frs.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournissieur/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrdComponent } from './composants/nouveau-clt-frd/nouveau-clt-frd.component';
import { DetailCmdCltFrsComponent } from './composants/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { DetailCmdComponent } from './composants/detail-cmd/detail-cmd.component';
import { NouvelleCmdCltFrsComponent } from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageGategorieComponent } from './pages/Gategorie/page-gategorie/page-gategorie.component';
import { NouvelleGategorieComponent } from './pages/fournissieur/page-fournisseur/nouvelle-gategorie/nouvelle-gategorie.component';
import { PageUtilisateurComponent } from './pages/Gategorie/page-utilisateur/page-utilisateur.component';
import { DetailUtlisateurComponent } from './composants/detail-utlisateur/detail-utlisateur.component';
import { NouvelleUtilisateurComponent } from './pages/Gategorie/nouvelle-utilisateur/nouvelle-utilisateur.component';
import { ChangerMotDePassComponent } from './pages/profil/changer-mot-de-pass/changer-mot-de-pass.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashbordComponent,
    PageStatistiqueComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    ButtonActionComponent,
    NouvelArticleComponent,
    PageMvtstkComponent,
    DetailMvtStkArticleComponent,
    DetailMvtStkComponent,
    DetaileCltFrsComponent,
    PageClientComponent,
    PageFournisseurComponent,
    NouveauCltFrdComponent,
    DetailCmdCltFrsComponent,
    PageCmdCltFrsComponent,
    DetailCmdComponent,
    NouvelleCmdCltFrsComponent,
    PageGategorieComponent,
    NouvelleGategorieComponent,
    PageUtilisateurComponent,
    DetailUtlisateurComponent,
    NouvelleUtilisateurComponent,
    ChangerMotDePassComponent,
    PageProfilComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
