import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminReportesComponent } from './admin-reportes.component';

describe('AdminReportesComponent', () => {
  let component: AdminReportesComponent;
  let fixture: ComponentFixture<AdminReportesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
