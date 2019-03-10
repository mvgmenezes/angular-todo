import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

/* Classe para criar um interceptor para sempre que um request for solicitado seja colocado
o header e assinado com o token para Basic Autenticacao  */

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
 
    // let username = 'mmenezes'
    // let password = '123'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken()
    let username = this.basicAuthenticationService.getAuthenticatedUser()

    if (basicAuthHeaderString && username){
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      })

    }
    

    return next.handle(request);
  }
}
