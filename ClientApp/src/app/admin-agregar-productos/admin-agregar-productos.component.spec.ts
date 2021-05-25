import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminAgregarProductosComponent } from './admin-agregar-productos.component';

describe('AdminAgregarProductosComponent', () => {
  let component: AdminAgregarProductosComponent;
  let fixture: ComponentFixture<AdminAgregarProductosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAgregarProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAgregarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
