import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddProjectPageComponent} from './project/components/add-project-page/add-project-page.component';
import {ProjectCardComponent} from './project/components/project-card/project-card.component';
import {LoginComponent} from './user/components/login/login.component';
import {SignUpComponent} from './user/components/sign-up/sign-up.component';
import {HomeComponent} from './home/home.component';
import {ProjectPageComponent} from './project/components/project-page/project-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'list-projects', component: ProjectCardComponent},
  { path: 'add-project',  component: AddProjectPageComponent},
  { path: 'sign-up',  component: SignUpComponent},
  { path: 'project-page/:id',  component: ProjectPageComponent},
  { path: 'list-projects/project-page/:id',  component: ProjectPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
