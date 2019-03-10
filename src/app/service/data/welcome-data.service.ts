import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
    return this.http.get<MessageBean>('http://localhost:8080/hello-world-bean');
    //console.log(this.http.get('http://localhost:8080/hello-world-bean'));
  }

  executeHelloWorldServiceWithPathVariable(name){
    return this.http.get<MessageBean>(`http://localhost:8080/hello-world-bean/path-variable/${name}`);
  }

}
