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

  constructor(private projectService: ProjectService, private fb: FormBuilder) {
    this.projects = projectService.get();
    this.projectNew = new Project();
  }

  projectNew: Project;
  projects: Project[];

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null],
      url: [null],
      description: [null],
      tags: [null]
    });
  }
  insertProject(): void {
    let t = this.form.value.tags.split(',');
    t = t.map( i => i.trim());
    this.form.value.tags = t;
    this.projectNew = this.form.value;
    this.projects.push(this.projectNew);
  }

}
