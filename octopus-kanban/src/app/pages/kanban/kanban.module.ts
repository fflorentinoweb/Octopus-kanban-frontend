import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { KanbanComponent, NewTaskComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    KanbanRoutingModule,
    SharedModule.forRoot()
  ],
  entryComponents: [NewTaskComponent],
  declarations: [KanbanComponent, NewTaskComponent]
})
export class KanbanModule { }
