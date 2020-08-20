import { Project, ProjectStatus } from '../models/project.js';

// Project State Management
type Listener<TData> = (items: TData[]) => void;

abstract class State<TData> {
  protected listeners: Listener<TData>[] = [];
  addListener(listenerFn: Listener<TData>) {
    this.listeners.push(listenerFn);
  }
}

class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstace() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
    );
    this.projects.push(newProject);
    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const projectIndex = this.projects.map((prj) => prj.id).indexOf(projectId);
    if (
      projectIndex !== -1 &&
      this.projects[projectIndex].status !== newStatus
    ) {
      this.projects[projectIndex].status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

// Singleton pattern, only one instance of project state exists
export const projectState = ProjectState.getInstace();
