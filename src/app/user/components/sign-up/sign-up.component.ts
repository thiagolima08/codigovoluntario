import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {MessageService} from '../../../shared/services/message.service';
import {User} from '../../../user/models/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userNew: User;
  form: FormGroup;
  hide = true;
  id: String;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private messageService: MessageService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    if (params.get('id')) {
      this.id = String(params.get('id'));
      this.userService.getUser(Number(this.id)).subscribe(p => {
        this.form = this.fb.group({
          id: [p.id],
          name: [p.name],
          email: [p.email],
          password: [p.password],
          isStudent: [p.isStudent]
        });
      });
    }
  });
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
    if (this.id) {
      this.userNew = this.form.value;
      this.userService.updateUser(this.userNew).subscribe(
        user => console.log(user)
      );
      this.messageService.success('Usuário alterado com sucesso!');
      this.form.reset();
    } else {
      this.userService.getUsers().subscribe(p => this.form.value.id = p.length + 1);
      let t = this.form.value.tags.split(',');
      t = t.map( i => i.trim());
      this.form.value.tags = t;
      this.userNew = this.form.value;
      this.userService.addUser(this.userNew).subscribe(
        user => console.log(user)
      );
      this.messageService.success('Usuário adicionado com sucesso!');
      this.form.reset();
    }
  }

  onFormSubmit(): void {
    alert(JSON.stringify(this.form.value, null, 2));
  }
}
