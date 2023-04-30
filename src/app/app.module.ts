import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './global/header/header.component';
import {ButtonComponent} from './global/button/button.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from './global/landing/landing.component';
import {ItemsContainerComponent} from "./items/items-container/items-container.component";
import {ItemsModule} from "./items/items.module";

const appRoutes: Routes = [
  {path: "", component: LandingComponent},
  {path: "collect", component: ItemsContainerComponent}
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
