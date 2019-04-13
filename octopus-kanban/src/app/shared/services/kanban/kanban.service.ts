import { Injectable, ComponentRef } from '@angular/core';
import { DomService } from 'src/app/shared/services';
import { NewTaskComponent } from 'src/app/pages/kanban/components'

@Injectable({
  providedIn: 'root'
})
export class KanbanService {
  private component: ComponentRef<NewTaskComponent>;

  constructor(
    private domService: DomService
  ) { }

  openNewTask() {
    this.component = this.domService.appendComponentToBody<NewTaskComponent>(NewTaskComponent);
  }

  closeNewTask() {
    this.domService.destroyComponent(this.component);
  }
}
