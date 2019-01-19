import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNomineeComponent } from './update-nominee.component';

describe('UpdateNomineeComponent', () => {
  let component: UpdateNomineeComponent;
  let fixture: ComponentFixture<UpdateNomineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNomineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNomineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
