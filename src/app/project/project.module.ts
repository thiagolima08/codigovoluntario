import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectPageComponent } from './components/add-project-page/add-project-page.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

import { MaterialModule } from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import {FirestoreModule} from '../firestore/firestore.module';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import {AppRoutingModule} from '../app-routing.module';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AddProjectPageComponent,
    ProjectCardComponent,
    ProjectPageComponent
  ],
  exports: [
    AddProjectPageComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTooltipModule,
    FirestoreModule,
    AppRoutingModule,
    NgbRatingModule
  ]
})
export class ProjectModule { }
