import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterComponent} from "./component/filter.component";
import {FilterPipe} from './filter.pipe';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faChevronUp, faXmark} from "@fortawesome/free-solid-svg-icons";
import { FilterContainerComponent } from './container/filter-container.component';
import { GroupFilterComponent } from './group-filter/group-filter.component';
import {ButtonComponent} from "../global/button/button.component";
import {ClickedOutsideDirective} from "../global/directives/clicked-outside.directive";

@NgModule({
  declarations: [
    FilterComponent,
    FilterPipe,
    FilterContainerComponent,
    GroupFilterComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ButtonComponent,
    ClickedOutsideDirective
  ],
  exports: [
    FilterContainerComponent,
    FilterPipe
  ]
})
export class FilterModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faChevronUp, faXmark);
  }
}
