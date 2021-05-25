import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminConfiguracionesComponent } from './admin-configuraciones.component';

describe('AdminConfiguracionesComponent', () => {
  let component: AdminConfiguracionesComponent;
  let fixture: ComponentFixture<AdminConfiguracionesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminConfiguracionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConfiguracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
