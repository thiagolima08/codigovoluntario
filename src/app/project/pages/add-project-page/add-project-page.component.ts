import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../../services/project.service';
import { Project } from './../../models/project';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-project-page',
  templateUrl: './add-project-page.component.html',
  styleUrls: ['./add-project-page.component.css']
})
export class AddProjectPageComponent implements OnInit {

  constructor(private projectService: ProjectService, private fb: FormBuilder, private snackbar: MatSnackBar) {
  }

  projectNew: Project;
  form: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null],
      name: [null],
      url: [null],
      description: [null],
      tags: [null]
    });
  }

  insertProject(): void {
    this.projectService.getProjects().subscribe(p => this.form.value.id = p.length + 1);
    let t = this.form.value.tags.split(',');
    t = t.map( i => i.trim());
    this.form.value.tags = t;
    this.projectNew = this.form.value;
    this.projectService.addProject(this.projectNew).subscribe(
      project => console.log(project)
    );
    this.openSnackBar();
    this.form.reset();
  }

  openSnackBar(message: string = 'Projeto adicionado!' , action: string = 'Fechar'): void {
    this.snackbar.open(message, action, {
      duration: 4000,
    });
  }

}
