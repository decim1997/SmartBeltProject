import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {


  user:User = new User("","");
  
  constructor(private alertController:AlertController,private router:Router) 
  { 

  }

  ngOnInit() {
  }

  async showAlertInfos(header:string,subheader:string,message:string)
  {
     const alert = await this.alertController.create({
      header: header,
      subHeader:subheader,
      message: message,
      buttons: ['Ok']
     }
     );

     await alert.present();
  }

  
  seConnecter()
  {
      if(this.user.pseudo == "" || this.user.password == "")
      {
      this.showAlertInfos("Form Empty","Data required","You must enter your pseudo and your password");
      }
      else
      {
     this.router.navigateByUrl('/menuprincipale');
      }
  }

  goToSignUp()
  {
    this.router.navigateByUrl('/signup');
  }

}


export class User
{
   pseudo:string;
   password:string;

   constructor(pseudo:string,password:string)
   {
     this.pseudo = pseudo;
    this.password = password;
   }
}
