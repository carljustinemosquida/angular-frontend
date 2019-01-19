import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterChartsComponent } from './voter-charts.component';

describe('LeaderboardGraphComponent', () => {
  let component: VoterChartsComponent;
  let fixture: ComponentFixture<VoterChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
