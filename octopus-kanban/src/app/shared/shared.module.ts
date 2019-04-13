import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomService, KanbanService } from './services';

import { HeaderComponent, FabComponent } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, FabComponent],
  entryComponents: [],
  exports: [HeaderComponent, FabComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [DomService, KanbanService]
    };
  }
}
