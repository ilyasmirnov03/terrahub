import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityComponent } from './entity/entity.component';
import { EntitiesContainerComponent } from './entities-container/entities-container.component';
import {FormsModule} from "@angular/forms";
import {ItemsModule} from "../items/items.module";
import {GlobalModule} from "../global/global.module";
import {FilterModule} from "../filter/filter.module";
import {ScrollingModule} from "@angular/cdk/scrolling";

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
        ScrollingModule
    ]
})
export class EntitiesModule { }
