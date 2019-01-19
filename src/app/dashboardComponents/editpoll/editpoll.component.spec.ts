import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpollComponent } from './editpoll.component';

describe('EditpollComponent', () => {
  let component: EditpollComponent;
  let fixture: ComponentFixture<EditpollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
