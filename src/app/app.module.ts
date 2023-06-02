import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './global/header/header.component';
import {ButtonComponent} from './global/button/button.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from './global/landing/landing.component';
import {ItemsContainerComponent} from "./items/items-container.component";
import {ItemsModule} from "./items/items.module";
import {EntitiesModule} from "./entities/entities.module";
import {EntitiesContainerComponent} from "./entities/entities-container/entities-container.component";

const appRoutes: Routes = [
  {path: "", component: LandingComponent, title: 'TerraHub'},
  {path: "items", component: ItemsContainerComponent, title: 'Terraria Items'},
  {path: "items/:collection", component: ItemsContainerComponent, title: 'Collect Terraria Items'},
  {path: "npcs", component: EntitiesContainerComponent, title: 'Terraria NPCs'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ItemsModule,
    EntitiesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
