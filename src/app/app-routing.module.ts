import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'menuprincipale', loadChildren: './menuprincipale/menuprincipale.module#MenuprincipalePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'massage', loadChildren: './massage/massage.module#MassagePageModule' },
  { path: 'chauffage', loadChildren: './chauffage/chauffage.module#ChauffagePageModule' },
  { path: 'checker', loadChildren: './checker/checker.module#CheckerPageModule' },
  { path: 'baterie', loadChildren: './baterie/baterie.module#BateriePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
