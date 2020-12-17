import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { ClassificationModule } from './classification/classification.module';
import { CommentModule } from './comment/comment.module';
import { ProjectModule } from './project/project.module';
import {LoginModule} from './user/components/login/login.module';
import { UserModule } from './user/user.module';
import { FirestoreModule } from './firestore/firestore.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ClassificationModule,
    CommentModule,
    ProjectModule,
    UserModule,
    LoginModule,
    FirestoreModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
