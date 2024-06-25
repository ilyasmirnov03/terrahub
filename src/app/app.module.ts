import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from './@global/landing/landing.component';
import {ItemsContainerComponent} from "./items/component/items-container.component";
import {ItemsModule} from "./items/items.module";
import {EntitiesModule} from "./entities/entities.module";
import {EntitiesContainerComponent} from "./entities/component/entities-container.component";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {GlobalModule} from "./@global/global.module";
import {NotFoundComponent} from "./@global/not-found/not-found.component";
import {AboutComponent} from "./@global/about/about.component";

const appRoutes: Routes = [
  {path: '', component: LandingComponent, title: 'TerraHub'},
  {path: 'items', component: ItemsContainerComponent, title: 'Terraria Items'},
  {path: 'items/:collection', component: ItemsContainerComponent, title: 'Collect Terraria Items'},
  {path: 'npcs', component: EntitiesContainerComponent, title: 'Terraria NPCs'},
  {path: 'about', component: AboutComponent, title: 'What is Terrahub'},
  {path: '**', component: NotFoundComponent, title: 'Not Found'}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ItemsModule,
    EntitiesModule,
    GlobalModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {
}
