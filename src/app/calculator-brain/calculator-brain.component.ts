import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-brain',
  standalone: true,
  imports: [],
  templateUrl: './calculator-brain.component.html',
  styleUrl: './calculator-brain.component.css'
})
export class CalculatorBrainComponent {
  //Variables Input y Output
  @Input() num1: number = 0;
  @Input() num2: number = 0;
  @Output() resultado = new EventEmitter<number>();

  ValidateNumbers() {
    if (isNaN(this.num1)) {
      alert("El primer número no es válido !!")
      return false;
    }
    if (isNaN(this.num2)) {
      alert("El segundo número no es válido !!")
      return false;
    }
    return true;
  }

  Sumar() {
    if (this.ValidateNumbers()) {
      this.resultado.emit(this.num1 + this.num2);
    }
  }

  Restar() {
    if (this.ValidateNumbers()) {
      this.resultado.emit(this.num1 - this.num2);
    }
  }

  Exponencial() {
    if (this.ValidateNumbers()) {
      this.resultado.emit(this.num1 ** this.num2);
    }
  }

  Multiplicar() {
    if (this.ValidateNumbers()) {
      this.resultado.emit(this.num1 * this.num2);
    }
  }

  Dividir() {
    if (this.ValidateNumbers()) {
      let aux: number = this.num1 / this.num2
      this.resultado.emit(Math.round(aux * 100) / 100);
    }
  }

  VolverCero() {
    this.resultado.emit(0);
  }
}
