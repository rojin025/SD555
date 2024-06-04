import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'users', component: UserComponent },
  { path: 'user/:user_id', component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },
  //   { path: '**', component: WelcomeComponent },
];
