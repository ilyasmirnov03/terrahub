import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterComponent} from "./filter/filter.component";
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    FilterComponent,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterComponent,
    FilterPipe
  ]
})
export class FilterModule {
}
