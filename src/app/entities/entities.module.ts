import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityComponent } from './entity/entity.component';
import { EntitiesContainerComponent } from './entities-container/entities-container.component';
import {FormsModule} from "@angular/forms";
import {ItemsModule} from "../items/items.module";
import {GlobalModule} from "../@global/global.module";
import {FilterModule} from "../filter/filter.module";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faSliders} from "@fortawesome/free-solid-svg-icons";

@NgModule({
  declarations: [
    EntityComponent,
    EntitiesContainerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ItemsModule,
    GlobalModule,
    FilterModule,
    ScrollingModule,
    FontAwesomeModule
  ]
})
export class EntitiesModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faSliders);
  }
}
