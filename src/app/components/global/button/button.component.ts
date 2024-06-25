import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'thb-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Output()
  public btnClick = new EventEmitter;

  public onClick(event: Event) {
    this.btnClick.emit(event);
  }
}
