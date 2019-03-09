import { Injectable } from '@angular/core';

//@injectable indica que é um servico e pode ser injetado em qualquer lugar que desejo usar
@Injectable({
  providedIn: 'root' //disponivel no root
})
export class HardcodedAuthenticationService {

  
  constructor() { }

  autenticar(username, password) :boolean{
    console.log('before ' + this.isUserLoggedIn());
    if (username==="mmenezes" && password==="123"){
      //salvando o usuario na session do browser
      sessionStorage.setItem('authenticaterUser', username); //https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
      console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user == null);
  }
}
