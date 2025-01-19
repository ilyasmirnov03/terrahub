import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
    selector: 'thb-items-header',
    templateUrl: './items-header.component.html',
    imports: [
        NgIf
    ]
})
export class ItemsHeaderComponent {
  @Input()
  collectionMode!: boolean;
}
