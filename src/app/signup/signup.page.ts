import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user:User = new User("","","");
  constructor() { }

  ngOnInit() {
  }

  CreateCount()
  {
    
  }

}


export class User{

  pseudo:string;
  email:string;
  password:string;


  constructor(pseudo:string,email:string,password:string)
  {
  this.pseudo = pseudo;
  this.email = email;
  this.password = password;
  }
}
