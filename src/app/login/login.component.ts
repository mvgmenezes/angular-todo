import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { 

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

}
