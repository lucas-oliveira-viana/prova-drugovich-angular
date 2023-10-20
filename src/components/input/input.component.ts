import { Component, Input } from '@angular/core';
import { FormControl, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() value = '';
  @Input() type = 'text';
  @Input() style: any;
  @Input() hasError = false;
  @Input() control: UntypedFormControl = new FormControl();
  @Input() mask = '';

  constructor() { }
}
