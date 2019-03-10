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
export class JWTAuthenticationService {

  
  constructor(private http: HttpClient) { }

  executeJWTAuthenticationService(username, password){

   //apos a implementacao do spring security, deve enviar o header com o token
    return this.http.post<any>(
      `${API_URL}/authenticate`, {
        "username": username,
        "password": password
      }).pipe( //pipe permite executar um codigo se a execucao for ok
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username); //https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
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