import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyboardComponent } from './tallyboard.component';

describe('TallyboardComponent', () => {
  let component: TallyboardComponent;
  let fixture: ComponentFixture<TallyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TallyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
