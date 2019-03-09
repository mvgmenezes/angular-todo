
//import org.springframework.boot.SpringApplicaton
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { WelcomeDataService } from '../service/data/welcome-data.service';


//@ComponentScan(value="com.mmenezes.springboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class WelcomeClassApplicaton implements OnInit{}
export class WelcomeComponent implements OnInit {

  //String message = "Some welcome message";
  message = 'Some welcome message';
  nomeRecebido = ''

  welcomeMessageFromService: string

  //public WelcomeClassApplicaton() {
  constructor(private route:ActivatedRoute,   //para poder recuperar o parametro enviado na url
    private welcomeDataService: WelcomeDataService) { //para acessar o JSON do Spring Boot

  }

  //void init(){
  ngOnInit() : void {

    console.log(this.message);
    //System.out.println(message)

    //recuperando o paramentro enviado na url
    console.log(this.route.snapshot.params['name']);
    this.nomeRecebido = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    //console.log('get the message');
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response), 
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithPath(){
    //console.log('get the message');
    this.welcomeDataService.executeHelloWorldServiceWithPathVariable(this.nomeRecebido).subscribe(
      response => this.handleSuccessfulResponse(response), 
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.mensagem
    //console.log(response);
    //console.log(response.mensagem);
  }

  handleErrorResponse(error){
    
    //console.log(error);
    //console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message
  }

}
