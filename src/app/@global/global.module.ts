import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchPipe} from "../pipes/search.pipe";
import {HeaderComponent} from "./header/header.component";
import {ButtonComponent} from "./button/button.component";
import {LandingComponent} from "./landing/landing.component";
import {RouterLink} from "@angular/router";
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {NotFoundComponent} from './not-found/not-found.component';
import {AboutComponent} from './about/about.component';
import {ReadingSectionComponent} from './reading-section/reading-section.component';
import {ThemeSwitcherComponent} from './theme-switcher/theme-switcher.component';
import {ClickedOutsideDirective} from "./directives/clicked-outside.directive";
import { SearchInputComponent } from './search-input/search-input.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SearchPipe,
    HeaderComponent,
    ButtonComponent,
    LandingComponent,
    NotFoundComponent,
    AboutComponent,
    ReadingSectionComponent,
    ThemeSwitcherComponent,
    ClickedOutsideDirective,
    SearchInputComponent,
  ],
    imports: [
        CommonModule,
        RouterLink,
        FontAwesomeModule,
        FormsModule
    ],
  exports: [
    SearchPipe,
    HeaderComponent,
    ButtonComponent,
    LandingComponent,
    NotFoundComponent,
    AboutComponent,
    ClickedOutsideDirective,
    SearchInputComponent
  ]
})
export class GlobalModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faChevronLeft);
  }
}
