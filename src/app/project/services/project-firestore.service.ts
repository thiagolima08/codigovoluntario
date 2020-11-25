import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {Project} from '../models/project';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectFirestoreService {

   colecaoProject: AngularFirestoreCollection<Project>;
   NOME_COLECAO = 'projetos';


  constructor(private afs: AngularFirestore) {
    this.colecaoProject = afs.collection(this.NOME_COLECAO);
  }

  listarProject(): Observable<Project[]> {
    return this.colecaoProject.valueChanges({idField: 'id'});
  }

  inserirProject(projeto: Project ): Observable<object>{
    delete.projeto.id;

    return from(this.colecaoProject.add(Object.assign({}, projeto)));
  }

  removerProject(id: string): Observable<void>{
    return from(this.colecaoProject.doc(id).delete());
  }

  pesquisarProjectPorId(id: string): Observable<Project>{
    return this.colecaoProject.doc(id).get().pipe(map(document => new Project(document.id, document.data())));

  }

  atualizarProject(projeto: Project): Observable<void>{
    delete projeto.id;
    // @ts-ignore
    return from(this.colecaoProject.doc(projeto.id).update(Object.assign({},projeto)));
  }
}
