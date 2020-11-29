import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectPageComponent } from './pages/add-project-page/add-project-page.component';
import { GetProjectPageComponent } from './pages/get-project-page/get-project-page.component';
import { ProjectFilterComponent } from './components/project-filter/project-filter.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';

import { MaterialModule } from './../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import {FirestoreModule} from '../firestore/firestore.module';

@NgModule({
  declarations: [
    AddProjectPageComponent,
    GetProjectPageComponent,
    ProjectFilterComponent,
    ProjectCardComponent,
    ProjectFormComponent,
  ],
  exports: [
    AddProjectPageComponent,
    AddProjectPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTooltipModule,
    FirestoreModule
  ]
})
export class ProjectModule { }
