import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';

//A ordem dos routes é muito importante, por isso o ** deve ficar por ultimo
const routes: Routes = [
  { path: '', component: LoginComponent}, 
  { path: 'login', component: LoginComponent},
  { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService] }, //canActive verifica, chama o servico que verifica se esta logado e pode acessar a URL
  { path: 'todos', component: ListTodosComponent , canActivate:[RouteGuardService] }, //canActive verifica, chama o servico que verifica se esta logado e pode acessar a URL
  { path: 'logout', component: LogoutComponent , canActivate:[RouteGuardService] }, //canActive verifica, chama o servico que verifica se esta logado e pode acessar a URL
  { path: 'todo/:id', component: TodoComponent , canActivate:[RouteGuardService] }, //canActive verifica, chama o servico que verifica se esta logado e pode acessar a URL    
  { path: 'todo', component: TodoComponent , canActivate:[RouteGuardService] }, //canActive verifica, chama o servico que verifica se esta logado e pode acessar a URL    

  { path: '**', component: ErrorComponent} //para todas as outras rotas(**) apresenta a tela de erro 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
