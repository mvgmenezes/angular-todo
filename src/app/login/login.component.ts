import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "mmenezes"
  password = ""
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Router
  //Dependency Injection 
  constructor(private router: Router, 
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { 

  }

  ngOnInit() {
  }


  handleLogin(){
    console.log(this.username);
    console.log(this.password);

    //if (this.username==="mmenezes" && this.password==="123"){
    if (this.hardcodedAuthenticationService.autenticar(this.username, this.password)){
      //redirect to welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false;
    }else{
      this.invalidLogin = true;
    }
  }

  handleBasciAuthLogin(){
    console.log(this.username);
    console.log(this.password);

  this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
    .subscribe(
      data => {
        console.log(data)
        //redirect to welcome page
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false;
      },
      error => {
        console.log(error)
        this.invalidLogin = true;
      }
    )

   
  }

}
