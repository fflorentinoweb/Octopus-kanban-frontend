import { NewTaskComponent } from './../new-task/new-task.component';
import { Component, OnInit, ComponentRef } from '@angular/core';
import { KanbanService } from 'src/app/shared/services';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {
  public newTaskComponent: ComponentRef<NewTaskComponent>;

  constructor(
    private kanbanService: KanbanService
  ) { }

  ngOnInit() {
  }

  public createNewTask() {
    this.kanbanService.openNewTask();
  }

}
