import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule
} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { SearchComponent } from './components/front-page/search/search.component';
import { HousesListComponent } from './components/front-page/houses-list/houses-list.component';
import { HouseComponent } from './components/house/house.component';
import { LoginComponent } from './components/account/login/login.component';
import { SignupComponent } from './components/account/signup/signup.component';
import { LogOffComponent } from './components/account/log-off/log-off.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FrontPageComponent,
    SearchComponent,
    HousesListComponent,
    HouseComponent,
    LoginComponent,
    SignupComponent,
    LogOffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
