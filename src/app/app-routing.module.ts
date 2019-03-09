import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';

//A ordem dos routes é muito importante, por isso o ** deve ficar por ultimo
const routes: Routes = [
  { path: '', component: LoginComponent}, //path principal direciona para Login
  { path: 'login', component: LoginComponent},
  { path: 'welcome/:name', component: WelcomeComponent}, //passando name por parametro
  { path: 'todos', component: ListTodosComponent},
    
  { path: '**', component: ErrorComponent} //para todas as outras rotas(**) apresenta a tela de erro 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
