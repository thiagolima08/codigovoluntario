import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddProjectPageComponent} from './project/pages/add-project-page/add-project-page.component';

const routes: Routes = [
  {
    path: 'listarCards',
    component: AddProjectPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
