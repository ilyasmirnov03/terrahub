import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemComponent} from "./item/item.component";
import {ItemSearchComponent} from "./item-search/item-search.component";
import {ItemsContainerComponent} from "./items-container/items-container.component";
import {ItemsHeaderComponent} from "./items-header/items-header.component";
import {FilterModule} from "../filter/filter.module";

@NgModule({
  declarations: [
    ItemComponent,
    ItemSearchComponent,
    ItemsContainerComponent,
    ItemsHeaderComponent
  ],
  imports: [
    CommonModule,
    FilterModule
  ],
  exports: [
    ItemComponent,
    ItemSearchComponent,
    ItemsContainerComponent,
    ItemsHeaderComponent
  ]
})
export class ItemsModule {
}
