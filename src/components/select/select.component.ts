import { Component, Input } from '@angular/core';
import { FormControl, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() control: UntypedFormControl = new FormControl();
  @Input() options: string[];
  @Input() style = {
    'border': 'none',
    'outline': '1px solid #D1D1D1',
    'background': '#FFF',
    'fontSize': '15px',
    'padding': '8px 10px',
    'cursor': 'pointer',
    'borderRight': '10px solid transparent'
  }
}
