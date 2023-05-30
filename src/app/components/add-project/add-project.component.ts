import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/Project';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  @Output() onAddProject: EventEmitter<Project> = new EventEmitter;
  text!: string;
  description!: string;
  link!: string;
  reminder: boolean = false;
  showAddProject!: boolean;
  subscription!: Subscription;
  
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddProject = value));
  }

  ngOnInit(): void {}
  onSubmit(){
    if(!this.text){
      alert('Please add a project!');
      return;
    } 

    const newProject = {
      text: this.text,
      description: this.description,
      link: this.link,
      reminder: this.reminder
    }

    this.onAddProject.emit(newProject);
    this.text = '';
    this.description = '';
    this.link = '';
    this.reminder = false;
  }
}
