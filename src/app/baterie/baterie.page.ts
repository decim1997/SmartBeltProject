import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-baterie',
  templateUrl: './baterie.page.html',
  styleUrls: ['./baterie.page.scss'],
})
export class BateriePage implements OnInit {


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
