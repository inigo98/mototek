import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetalleCompraComponent } from './detalle-compra.component';

describe('DetalleCompraComponent', () => {
  let component: DetalleCompraComponent;
  let fixture: ComponentFixture<DetalleCompraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
