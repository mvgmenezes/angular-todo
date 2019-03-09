import { Injectable } from '@angular/core';

//@injectable indica que é um servico e pode ser injetado em qualquer lugar que desejo usar
@Injectable({
  providedIn: 'root' //disponivel no root
})
export class HardcodedAuthenticationService {

  constructor() { }

  autenticar(username, password) :boolean{
    if (username==="mmenezes" && password==="123"){
      return true;
    }
    return false;
  }
}
