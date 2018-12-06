// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MenuComponent } from './components/menu/menu.component';
import { IncluirCervejasComponent } from './components/incluir-cervejas/incluir-cervejas.component';
import { ListarCervejasComponent } from './components/listar-cervejas/listar-cervejas.component';
import { DetalheCervejaComponent } from './components/detalhe-cerveja/detalhe-cerveja.component';

// Pipes
import { UnidadeLitragemPipe } from './pipes/unidade-litragem.pipe';
import { TrocaPontoVirgulaPipe } from './pipes/troca-ponto-virgula.pipe';
import { FiltroPipe } from './pipes/filtro.pipe';
import { EspacoMoedaPipe } from './pipes/espaco-moeda.pipe';

// Services
import { CervejaService } from './services/cerveja.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarCervejasComponent,
    DetalheCervejaComponent,
    EspacoMoedaPipe,
    UnidadeLitragemPipe,
    TrocaPontoVirgulaPipe,
    FiltroPipe,
    WelcomeComponent,
    MenuComponent,
    IncluirCervejasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CervejaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
