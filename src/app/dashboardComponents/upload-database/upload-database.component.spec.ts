import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDatabaseComponent } from './upload-database.component';

describe('UploadDatabaseComponent', () => {
  let component: UploadDatabaseComponent;
  let fixture: ComponentFixture<UploadDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
