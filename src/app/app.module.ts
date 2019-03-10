import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // para usar o  [(ngModel)] no html é necessario esse import

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent //quando se cria um novo componente (@Component) deve ser associado como um angular modulo(@NgModule)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // para usar o  [(ngModel)] no html é necessario esse import
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true} //criando o interceptor para as requisicoes http enviar o token gerado na classe de interceptor (http-intercepter-basic-auth-service.ts)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
