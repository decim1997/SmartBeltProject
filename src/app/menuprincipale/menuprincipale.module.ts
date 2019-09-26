import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuprincipalePage } from './menuprincipale.page';

const routes: Routes = [
  {
    path: '',
    component: MenuprincipalePage,
    children:[
      { path: 'menu', 
      loadChildren: '../menu/menu.module#MenuPageModule' 
    }
    ]
  },
  {
    path:'',
    redirectTo: '../menu'
  }


];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuprincipalePage]
})
export class MenuprincipalePageModule {}
