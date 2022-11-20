import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArchivedTaskComponent } from './list-archived-task.component';

describe('ListArchivedTaskComponent', () => {
  let component: ListArchivedTaskComponent;
  let fixture: ComponentFixture<ListArchivedTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListArchivedTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListArchivedTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
