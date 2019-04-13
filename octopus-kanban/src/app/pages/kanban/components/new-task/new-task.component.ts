import { Component, OnInit, HostBinding, ComponentRef } from '@angular/core';

import { KanbanService } from 'src/app/shared/services';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {

  constructor(
    private kanbanService: KanbanService
  ) {}

  ngOnInit() {}

  public closeComponent() {
    this.kanbanService.closeNewTask();
  }
}
