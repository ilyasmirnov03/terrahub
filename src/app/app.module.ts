import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/global/header/header.component';
import { ButtonComponent } from './components/global/button/button.component';
import {HttpClientModule} from "@angular/common/http";
import { ItemComponent } from './components/items/item/item.component';
import { ItemsContainerComponent } from './components/items/items-container/items-container.component';
import { ItemsHeaderComponent } from './components/items/items-header/items-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ItemComponent,
    ItemsContainerComponent,
    ItemsHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
