import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterComponent} from "./component/filter.component";
import {FilterPipe} from './filter.pipe';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faChevronUp, faXmark} from "@fortawesome/free-solid-svg-icons";

@NgModule({
  declarations: [
    FilterComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FilterComponent,
    FilterPipe
  ]
})
export class FilterModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faChevronUp, faXmark);
  }
}
