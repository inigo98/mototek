import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminAgregarCategoriasComponent } from './admin-agregar-categorias.component';

describe('AdminAgregarCategoriasComponent', () => {
  let component: AdminAgregarCategoriasComponent;
  let fixture: ComponentFixture<AdminAgregarCategoriasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAgregarCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAgregarCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
