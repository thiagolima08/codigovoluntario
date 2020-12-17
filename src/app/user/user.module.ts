import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    SignUpComponent
  ],
  exports: [
    SignUpComponent
],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class UserModule { }
