import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';

//localhost:4200
const routes: Routes = [                                      // ->path page
    { path: '', component: HomeComponent},                    // -> / home page  localhost:4200/
    { path: 'login', component: LoginComponent},              // -> / login page  localhost:4200/login
    { path: 'register', component: RegisterComponent},        // -> / register page  localhost:4200/register
    { path: '**', redirectTo: ''},                            // -> / hola   page  localhost:4200/hola
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
