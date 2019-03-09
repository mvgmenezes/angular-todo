
//import org.springframework.boot.SpringApplicaton
import { Component, OnInit } from '@angular/core';


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

  //public WelcomeClassApplicaton() {
  constructor() { }

  //void init(){
  ngOnInit() : void {

    console.log(this.message);
    //System.out.println(message)

  }

}
