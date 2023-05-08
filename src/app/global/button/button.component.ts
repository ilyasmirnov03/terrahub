import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Output() btnClick = new EventEmitter;
  onClick(event: Event) {
    this.btnClick.emit(event);
  }
}
