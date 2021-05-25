import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FavoritoComponent } from './favorito.component';

describe('FavoritoComponent', () => {
  let component: FavoritoComponent;
  let fixture: ComponentFixture<FavoritoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
