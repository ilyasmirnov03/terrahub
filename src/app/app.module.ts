import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from './@global/landing/landing.component';
import {ItemsContainerComponent} from "./items/items-container.component";
import {ItemsModule} from "./items/items.module";
import {EntitiesModule} from "./entities/entities.module";
import {EntitiesContainerComponent} from "./entities/entities-container/entities-container.component";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {GlobalModule} from "./@global/global.module";
import {NotFoundComponent} from "./@global/not-found/not-found.component";

const appRoutes: Routes = [
  {path: "", component: LandingComponent, title: 'TerraHub'},
  {path: "items", component: ItemsContainerComponent, title: 'Terraria Items'},
  {path: "items/:collection", component: ItemsContainerComponent, title: 'Collect Terraria Items'},
  {path: "npcs", component: EntitiesContainerComponent, title: 'Terraria NPCs'},
  {path: "**", component: NotFoundComponent, title: 'Not Found'}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ItemsModule,
    EntitiesModule,
    GlobalModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
