import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  hide = true;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null],
      name: [null],
      email: [null],
      password: [null],
      institute: [null],
      isStudent: false
    });
  }

  insertUser(): void {
    console.log('cadastrado!');
  }

  onFormSubmit(): void {
    alert(JSON.stringify(this.form.value, null, 2));
  }
}
