import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teoria } from './teoria';

describe('Teoria', () => {
  let component: Teoria;
  let fixture: ComponentFixture<Teoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
