import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemComponent} from "./item/item.component";
import {ItemsContainerComponent} from "./items-container.component";
import {ItemsHeaderComponent} from "./items-header/items-header.component";
import {FilterModule} from "../filter/filter.module";
import {FormsModule} from "@angular/forms";
import {CheckboxComponent} from './item/checkbox/checkbox.component';
import {DBConfig, NgxIndexedDBModule} from "ngx-indexed-db";
import {GlobalModule} from "../@global/global.module";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faSliders} from "@fortawesome/free-solid-svg-icons";

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
    ScrollingModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    FontAwesomeModule,
  ],
  exports: [
    ItemComponent,
    ItemsContainerComponent,
    ItemsHeaderComponent
  ]
})
export class ItemsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faSliders);
  }
}
