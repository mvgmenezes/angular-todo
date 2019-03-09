import { Component } from '@angular/core';

//the @component  é com se fosse o decorator
@Component({
  selector: 'app-root', //selector - é a tag name desse componente, caso alguem queria usa-lo Ex: <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
}
