import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

//@injectable indica que é um servico e pode ser injetado em qualquer lugar que desejo usar
@Injectable({
  providedIn: 'root' //disponivel no root
})
export class BasicAuthenticationService {

  
  constructor(private http: HttpClient) { }

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

  executeAuthenticationService(username, password){

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    //cria o header com o token gerado.
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    //apos a implementacao do spring security, deve enviar o header com o token
    return this.http.get<AuthenticationBean>(
      `http://localhost:8080/basicauth` , 
      {headers : headers}).pipe( //pipe permite executar um codigo se a execucao for ok
        map(
          data => {
            sessionStorage.setItem('authenticaterUser', username); //https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
            return data;
          }
        )
      );
  }

  
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user == null);
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser');
  }
}

export class AuthenticationBean {
  constructor(public message:string){}
}