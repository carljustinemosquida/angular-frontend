import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterPieChartComponent } from './voter-pie-chart.component';

describe('VoterPieChartComponent', () => {
  let component: VoterPieChartComponent;
  let fixture: ComponentFixture<VoterPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
