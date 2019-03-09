import { Component } from '@angular/core';

//the @component  é com se fosse o decorator
@Component({
  selector: 'app-root', //selector - é a tag name desse componente, caso alguem queria usa-lo Ex: <app-root></app-root>
  templateUrl: './app.component.html', //template do componente, localizacao do html
  //template: '<h1> {{ title}} </h1>', //incluindo o template diretamente
  styleUrls: ['./app.component.css'] //style do componente, css 
})
export class AppComponent {
  title = 'todo'; //variavel que pode ser usada dentro do componente.html atraves de {{ title }}
  message = 'Welcome to World'; // o nome de {{}} é interpolation
  hello = 'Hello app';
}
