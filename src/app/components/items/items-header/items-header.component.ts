import {Component, Input} from '@angular/core';

@Component({
  selector: 'thb-items-header',
  templateUrl: './items-header.component.html',
})
export class ItemsHeaderComponent {
  @Input()
  collectionMode!: boolean;
}
