import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss']
})
export class FieldErrorComponent {

  @Input() type: string = '';

  getErrorText() {
    return this.type === 'required' ? 'Campo obrigatório' : 'Campo inválido'
  }
}
