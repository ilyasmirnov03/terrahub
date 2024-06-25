import { Component } from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {ReadingSectionComponent} from "../reading-section/reading-section.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'thb-not-found',
  templateUrl: './not-found.component.html',
  standalone: true,
  imports: [
    ButtonComponent,
    ReadingSectionComponent,
    RouterLink
  ]
})
export class NotFoundComponent {

}
