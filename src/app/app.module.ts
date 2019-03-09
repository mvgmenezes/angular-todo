import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // para usar o  [(ngModel)] no html é necessario esse import

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent //quando se cria um novo componente (@Component) deve ser associado como um angular modulo(@NgModule)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // para usar o  [(ngModel)] no html é necessario esse import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
