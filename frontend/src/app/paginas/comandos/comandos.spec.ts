import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comandos } from './comandos';

describe('Comandos', () => {
  let component: Comandos;
  let fixture: ComponentFixture<Comandos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comandos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comandos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
