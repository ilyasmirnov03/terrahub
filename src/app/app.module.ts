import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/global/header/header.component';
import { ButtonComponent } from './components/global/button/button.component';
import {HttpClientModule} from "@angular/common/http";
import { ItemComponent } from './components/items/item/item.component';
import { ItemsContainerComponent } from './components/items/items-container/items-container.component';
import { ItemsHeaderComponent } from './components/items/items-header/items-header.component';
import {RouterModule, Routes} from "@angular/router";
import { LandingComponent } from './components/landing/landing.component';
import { FilterComponent } from './components/filter/filter.component';
import { ItemSearchComponent } from './components/items/item-search/item-search.component';

const appRoutes: Routes = [
  {path:"", component: LandingComponent},
  {path: "collect", component: ItemsContainerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ItemComponent,
    ItemsContainerComponent,
    ItemsHeaderComponent,
    LandingComponent,
    FilterComponent,
    ItemSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
