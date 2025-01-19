import { Component } from '@angular/core';
import {ItemsContainerComponent} from "../items-container.component";

@Component({
    selector: 'thb-items-collection',
    imports: [
        ItemsContainerComponent
    ],
    template: `<thb-items-container [collectionMode]="true"></thb-items-container>`
})
export class ItemsCollectionComponent {
}
