import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListarCervejasComponent } from './components/listar-cervejas/listar-cervejas.component';
import { DetalheCervejaComponent } from './components/detalhe-cerveja/detalhe-cerveja.component';
import { EspacoMoedaPipe } from './pipes/espaco-moeda.pipe';
import { PontoporvirgulaPipe } from './pipes/pontoporvirgula.pipe';
import { MloulPipe } from './pipes/mloul.pipe'

import { FormsModule } from '@angular/forms';
import { FiltroCervejaPipe } from './pipes/filtro-cerveja.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ListarCervejasComponent,
    DetalheCervejaComponent,
    EspacoMoedaPipe,
    PontoporvirgulaPipe,
    MloulPipe,
    FiltroCervejaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
