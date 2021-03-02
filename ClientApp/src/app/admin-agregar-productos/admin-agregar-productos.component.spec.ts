import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAgregarProductosComponent } from './admin-agregar-productos.component';

describe('AdminAgregarProductosComponent', () => {
  let component: AdminAgregarProductosComponent;
  let fixture: ComponentFixture<AdminAgregarProductosComponent>;

  beforeEach(async(() => {
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
