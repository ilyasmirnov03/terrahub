import { Component, input } from '@angular/core';

@Component({
  selector: 'thb-items-header',
  templateUrl: './items-header.component.html',
  imports: []
})
export class ItemsHeaderComponent {
  readonly collectionMode = input.required<boolean>();
}
