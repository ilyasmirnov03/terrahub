import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemComponent} from "./item/item.component";
import {ItemsContainerComponent} from "./items-container/items-container.component";
import {ItemsHeaderComponent} from "./items-header/items-header.component";
import {FilterModule} from "../filter/filter.module";
import {SearchPipe} from './item-search/search.pipe';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ItemComponent,
    ItemsContainerComponent,
    ItemsHeaderComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FilterModule,
    FormsModule
  ],
  exports: [
    ItemComponent,
    ItemsContainerComponent,
    ItemsHeaderComponent
  ]
})
export class ItemsModule {
}
