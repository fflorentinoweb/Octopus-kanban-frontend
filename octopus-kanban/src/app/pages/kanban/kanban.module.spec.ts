import { KanbanModule } from './kanban.module';

describe('KanbanModule', () => {
  let kanbanModule: KanbanModule;

  beforeEach(() => {
    kanbanModule = new KanbanModule();
  });

  it('should create an instance', () => {
    expect(kanbanModule).toBeTruthy();
  });
});
