import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddProjectPageComponent} from './project/pages/add-project-page/add-project-page.component';
import {ProjectCardComponent} from './project/components/project-card/project-card.component';

const routes: Routes = [
  { path: '', component: AddProjectPageComponent},
  { path: 'listarprojetos', component: ProjectCardComponent},
  { path: 'project/:id',  component: AddProjectPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
