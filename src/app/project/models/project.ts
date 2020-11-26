export class Project {
  id?: string;
  name?: string;
  url?: string;
  description?: string;
  tags?: string[];

  constructor(id?: string, project: Project = {}) {
    this.id = id;
    this.name = project.name;
    this.url = project.url;
    this.description = project.description;
    this.tags = project.tags;
  }
}
