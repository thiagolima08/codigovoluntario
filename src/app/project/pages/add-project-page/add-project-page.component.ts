import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../../services/project.service';
import { Project } from './../../models/project';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-project-page',
  templateUrl: './add-project-page.component.html',
  styleUrls: ['./add-project-page.component.css']
})
export class AddProjectPageComponent implements OnInit {

  projectNew: Project;
  projects: Project[];

  form: FormGroup;

  constructor(private projectService: ProjectService, private fb: FormBuilder) {
    this.projects = projectService.get();
    this.projectNew = new Project();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null],
      url: [null],
      description: [null],
      tags: [null]
    });
  }

  insertProject(): void {
    this.projectNew = this.form.value;
    this.projects.push(this.projectNew);
  }

}
