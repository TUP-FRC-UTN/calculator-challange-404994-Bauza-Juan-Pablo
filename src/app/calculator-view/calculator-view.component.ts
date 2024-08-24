import { Component } from '@angular/core';
import { CalculatorBrainComponent } from '../calculator-brain/calculator-brain.component';

@Component({
  selector: 'app-calculator-view',
  standalone: true,
  imports: [CalculatorBrainComponent],
  templateUrl: './calculator-view.component.html',
  styleUrl: './calculator-view.component.css'
})
export class CalculatorViewComponent {
  number1: number = 0;
  number2: number = 0;
  resultado: number = 0;

  UpdateNum1(event: any) {
    this.number1 = Number(event.target.value);
    console.log(this.number1);
  }

  UpdateNum2(event: any) {
    this.number2 = Number(event.target.value);
    console.log(this.number2);
  }

  MostrarResultado(result: number) {
    this.resultado = result;
    console.log(this.resultado);
  }

}
