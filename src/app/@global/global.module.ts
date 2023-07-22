import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchPipe} from "../pipes/search.pipe";
import {HeaderComponent} from "./header/header.component";
import {ButtonComponent} from "./button/button.component";
import {LandingComponent} from "./landing/landing.component";
import {RouterLink} from "@angular/router";
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";

@NgModule({
  declarations: [
    SearchPipe,
    HeaderComponent,
    ButtonComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    FontAwesomeModule
  ],
  exports: [
    SearchPipe,
    HeaderComponent,
    ButtonComponent,
    LandingComponent
  ]
})
export class GlobalModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faChevronLeft);
  }
}
