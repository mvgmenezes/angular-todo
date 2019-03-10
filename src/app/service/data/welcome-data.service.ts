import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';


export class MessageBean {
  constructor(public mensagem: string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<MessageBean>(`${API_URL}/hello-world-bean`);
    //console.log(this.http.get('http://localhost:8080/hello-world-bean'));
  }

  executeHelloWorldServiceWithPathVariable(name){

    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // console.log(basicAuthHeaderString);
    // //cria o header com o token gerado.
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })

    //apos a implementacao do spring security, deve enviar o header com o token
    return this.http.get<MessageBean>(`${API_URL}/hello-world-bean/path-variable/${name}` , 
      //{headers : headers}
      );
  }

  // //apos implementar o spring security agora para acessar a API é necessario enviar a senha
  // createBasicAuthenticationHttpHeader(){
  //   let username = 'mmenezes'
  //   let password = '123'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }

}
