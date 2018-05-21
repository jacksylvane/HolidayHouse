import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { HouseComponent } from './components/house/house.component';
import { SignupComponent } from './components/account/signup/signup.component';
import { LogOffComponent } from './components/account/log-off/log-off.component';
import { LoginComponent } from './components/account/login/login.component';

const routes: Routes = [
  { path: 'house/:id', component: HouseComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'log-of', component: LogOffComponent},
  {
    path: '**',
    component: FrontPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
