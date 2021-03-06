import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DespuesCompraComponent } from './despues-compra.component';

describe('DespuesCompraComponent', () => {
  let component: DespuesCompraComponent;
  let fixture: ComponentFixture<DespuesCompraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DespuesCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespuesCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
