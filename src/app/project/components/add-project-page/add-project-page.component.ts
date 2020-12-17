import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// import {ProjectFirestoreService} from '../../services/project-firestore.service';
import {ProjectService} from '../../services/project.service';
import {MessageService} from '../../../shared/services/message.service';

@Component({
  selector: 'app-add-project-page',
  templateUrl: './add-project-page.component.html',
  styleUrls: ['./add-project-page.component.css']
})
export class AddProjectPageComponent implements OnInit {

  constructor(private projectService: ProjectService,
              private fb: FormBuilder,
              private messageService: MessageService,
              private route: ActivatedRoute) {}

  projectNew: Project;
  form: FormGroup;
  id: String;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.id = String(params.get('id'));
        this.projectService.getProject(Number(this.id)).subscribe(p => {
          this.form = this.fb.group({
            id: [p.id],
            name: [p.name],
            url: [p.url],
            description: [p.description],
            tags: [p.tags.join(',')]
          });
        });
      }
    });
    this.form = this.fb.group({
      id: [null],
      name: [null],
      url: [null],
      description: [null],
      tags: [null]
    });
  }

  insertProject(): void {
    if (this.id) {
      let t = this.form.value.tags.split(',');
      t = t.map( i => i.trim());
      this.form.value.tags = t;
      this.projectNew = this.form.value;
      this.projectService.updateProject(this.projectNew).subscribe(
        project => console.log(project)
      );
      this.messageService.success('Projeto alterado com sucesso!');
      this.form.reset();
    } else {
      this.projectService.getProjects().subscribe(p => this.form.value.id = p.length + 1);
      let t = this.form.value.tags.split(',');
      t = t.map( i => i.trim());
      this.form.value.tags = t;
      this.projectNew = this.form.value;
      this.projectService.addProject(this.projectNew).subscribe(
        project => console.log(project)
      );
      this.messageService.success('Projeto adicionado com sucesso!');
      this.form.reset();
    }
  }



}
