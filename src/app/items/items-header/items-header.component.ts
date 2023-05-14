import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-items-header',
  templateUrl: './items-header.component.html',
})
export class ItemsHeaderComponent {
  @Input()
  collectionMode!: boolean;
}
