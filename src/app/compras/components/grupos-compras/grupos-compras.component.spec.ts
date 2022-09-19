import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposComprasComponent } from './grupos-compras.component';

describe('GruposComprasComponent', () => {
  let component: GruposComprasComponent;
  let fixture: ComponentFixture<GruposComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruposComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GruposComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
