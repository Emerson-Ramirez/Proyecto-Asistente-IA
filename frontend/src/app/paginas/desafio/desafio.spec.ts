import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desafio } from './desafios';

describe('Desafio', () => {
  let component: Desafio;
  let fixture: ComponentFixture<Desafio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Desafio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Desafio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
