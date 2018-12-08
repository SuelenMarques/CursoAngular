import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

//Components
import { AppComponent } from './app.component';
import { ListarCervejasComponent } from './components/listar-cervejas/listar-cervejas.component';
import { DetalheCervejaComponent } from './components/detalhe-cerveja/detalhe-cerveja.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//pipes
import { PontoporvirgulaPipe } from './pipes/pontoporvirgula.pipe';
import { MloulPipe } from './pipes/mloul.pipe';
import { EspacoMoedaPipe } from './pipes/espaco-moeda.pipe';
import { FiltroCervejaPipe } from './pipes/filtro-cerveja.pipe';
import { IncluirCervejaComponent } from './components/incluir-cerveja/incluir-cerveja.component';
import { FormDebuggerComponent } from './components/form-debugger/form-debugger.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    ListarCervejasComponent,
    DetalheCervejaComponent,
    EspacoMoedaPipe,
    PontoporvirgulaPipe,
    MloulPipe,
    FiltroCervejaPipe,
    WelcomeComponent,
    NavbarComponent,
    IncluirCervejaComponent,
    FormDebuggerComponent,
    LoginComponent,
    
  ],
  imports: [
    //Intancia a aplicação no navegador
    BrowserModule,
    //Faz requests HTTP
    HttpClientModule,
    //Da suporte ao two way data biding
    FormsModule,
    //Suporte a rotas
    RouterModule.forRoot([
      { path: 'login' , component: LoginComponent },

      { path: 'welcome', canActivate: [AuthGuardService], component: WelcomeComponent },
      { path: 'cervejas', canActivate: [AuthGuardService],  component: ListarCervejasComponent},      
      { path: 'cerveja/:id', canActivate: [AuthGuardService],  component: DetalheCervejaComponent},      

      { path: 'cervejas/incluir', canActivate: [AuthGuardService], component: IncluirCervejaComponent},    
      { path: '', redirectTo: 'login', pathMatch: 'full' }
      
    ]),
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
