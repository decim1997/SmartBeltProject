import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menuprincipale',
  templateUrl: './menuprincipale.page.html',
  styleUrls: ['./menuprincipale.page.scss'],
})
export class MenuprincipalePage implements OnInit {


  selectedpath = '';

  pages = [
    {
      title: 'profile',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'massage',
      url: '/massage',
      icon: 'thunderstorm'
    },
    {
      title: 'chauffage',
      url: '/chauffage',
      icon: 'thermometer'
    },
    {
      title: 'checker',
      url: '/checker',
      icon: 'watch'
    },
    {
      title: 'baterie',
      url: '/baterie',
      icon: 'battery-full'
    },
    {
      title: 'marche',
      url: '/marche',
      icon: 'walk'
    },
    {
      title: 'logout',
      url: '/signin',
      icon: 'log-out'
    }
  ];

  constructor(private router:Router)
   {

    this.router.events.subscribe((event:RouterEvent)=>{
       
         this.selectedpath = event.url;
    });

  }

  ngOnInit() {
  }

}
