import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorBrainComponent } from './calculator-brain.component';

describe('CalculatorBrainComponent', () => {
  let component: CalculatorBrainComponent;
  let fixture: ComponentFixture<CalculatorBrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorBrainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorBrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
