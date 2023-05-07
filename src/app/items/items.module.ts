import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemComponent} from "./item/item.component";
import {ItemsContainerComponent} from "./items-container/items-container.component";
import {ItemsHeaderComponent} from "./items-header/items-header.component";
import {FilterModule} from "../filter/filter.module";
import {SearchPipe} from './item-search/search.pipe';
import {FormsModule} from "@angular/forms";
import {CheckboxComponent} from './item/checkbox/checkbox.component';

import {DBConfig, NgxIndexedDBModule} from "ngx-indexed-db";

const dbConfig: DBConfig = {
  name: 'TerrariaHub',
  version: 1,
  objectStoresMeta: [{
    store: 'items',
    storeConfig: {keyPath: 'id', autoIncrement: false},
    storeSchema: [
      {name: 'id', keypath: 'id', options: {unique: false}},
      {name: 'completed', keypath: 'completed', options: {unique: false}}
    ]
  }]
}

@NgModule({
  declarations: [
    ItemComponent,
    ItemsContainerComponent,
    ItemsHeaderComponent,
    SearchPipe,
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    FilterModule,
    FormsModule,
    NgxIndexedDBModule.forRoot(dbConfig),
  ],
  exports: [
    ItemComponent,
    ItemsContainerComponent,
    ItemsHeaderComponent
  ]
})
export class ItemsModule {
}
