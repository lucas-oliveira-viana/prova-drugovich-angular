import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {

  @Input() label = '';
  @Input() style: { [key: string]: string } = {
    'backgroundColor': '#000000',
    'color': '#FFFFFF'
  };
  @Input() icon = {
    path: '',
    width: '',
    height: ''
  };
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  handleClick(event: any) {
    this.onClick.emit(event);
  }
}
