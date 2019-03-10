import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

//@injectable indica que é um servico e pode ser injetado em qualquer lugar que desejo usar
@Injectable({
  providedIn: 'root' //disponivel no root
})
export class BasicAuthenticationService {

  
  constructor(private http: HttpClient) { }

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
            sessionStorage.setItem('token', basicAuthHeaderString);
            return data;
          }
        )
      );
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticaterUser');
  }
  getAuthenticatedToken(){
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem('token');
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user == null);
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser');
    sessionStorage.removeItem('token');
  }
}

export class AuthenticationBean {
  constructor(public message:string){}
}