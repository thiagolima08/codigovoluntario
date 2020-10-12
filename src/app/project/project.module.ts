import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectPageComponent } from './pages/add-project-page/add-project-page.component';
import { GetProjectPageComponent } from './pages/get-project-page/get-project-page.component';
import { ProjectFilterComponent } from './components/project-filter/project-filter.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectListComponent } from './components/project-list/project-list.component';

import { MaterialModule } from './../material.module';

@NgModule({
  declarations: [AddProjectPageComponent, GetProjectPageComponent, ProjectFilterComponent, ProjectCardComponent, ProjectFormComponent, ProjectListComponent],
  exports: [
    AddProjectPageComponent,
    AddProjectPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class ProjectModule { }
