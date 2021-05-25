import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminUsuariosComponent } from './admin-usuarios.component';

describe('AdminUsuariosComponent', () => {
  let component: AdminUsuariosComponent;
  let fixture: ComponentFixture<AdminUsuariosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
