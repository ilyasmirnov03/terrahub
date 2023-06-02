import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemComponent} from "./item/item.component";
import {ItemsContainerComponent} from "./items-container.component";
import {ItemsHeaderComponent} from "./items-header/items-header.component";
import {FilterModule} from "../filter/filter.module";
import {FormsModule} from "@angular/forms";
import {CheckboxComponent} from './item/checkbox/checkbox.component';

import {DBConfig, NgxIndexedDBModule} from "ngx-indexed-db";
import {StoreModule} from "@ngrx/store";
import {itemReducer, metaReducers} from "./state/reducer";
import {GlobalModule} from "../global/global.module";

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
    CheckboxComponent,
  ],
  imports: [
    CommonModule,
    FilterModule,
    FormsModule,
    GlobalModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    StoreModule.forRoot({
        items: itemReducer
      }, {
        metaReducers: metaReducers
      }
    )
  ],
  exports: [
    ItemComponent,
    ItemsContainerComponent,
    ItemsHeaderComponent
  ]
})
export class ItemsModule {
}
