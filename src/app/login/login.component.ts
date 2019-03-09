import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }


  handleLogin(){
    console.log(this.username);
    console.log(this.password);

    if (this.username==="mmenezes" && this.password==="123"){
      this.invalidLogin = false;
    }else{
      this.invalidLogin = true;
    }
  }

}
