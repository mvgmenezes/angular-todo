import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';

//welcome
const routes: Routes = [
  { path: '', component: LoginComponent}, //path principal direciona para Login
  { path: 'login', component: LoginComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: '**', component: ErrorComponent} //para todas as outras rotas(**) apresenta a tela de erro 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
