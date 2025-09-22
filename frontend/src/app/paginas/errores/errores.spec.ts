import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Errores } from './errores';

describe('Errores', () => {
  let component: Errores;
  let fixture: ComponentFixture<Errores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Errores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Errores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
