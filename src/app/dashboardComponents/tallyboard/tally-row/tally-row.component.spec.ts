import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyRowComponent } from './tally-row.component';

describe('TallyRowComponent', () => {
  let component: TallyRowComponent;
  let fixture: ComponentFixture<TallyRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallyRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TallyRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
