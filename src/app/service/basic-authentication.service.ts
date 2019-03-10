import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'


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
      `${API_URL}/basicauth` , 
      {headers : headers}).pipe( //pipe permite executar um codigo se a execucao for ok
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username); //https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }
  getAuthenticatedToken(){
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN);
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user == null);
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean {
  constructor(public message:string){}
}