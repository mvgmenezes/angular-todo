import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

/* Classe para criar um interceptor para sempre que um request for solicitado seja colocado
o header e assinado com o token para Basic Autenticacao  */

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let username = 'mmenezes'
    let password = '123'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    })

    return next.handle(request);
  }
}
