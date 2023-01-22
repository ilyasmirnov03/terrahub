import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/global/header/header.component';
import { ButtonComponent } from './components/global/button/button.component';
import {HttpClientModule} from "@angular/common/http";
import { ItemComponent } from './components/items/item/item.component';
import { ItemsContainerComponent } from './components/items/items-container/items-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ItemComponent,
    ItemsContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
