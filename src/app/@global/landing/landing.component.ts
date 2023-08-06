import {Component} from '@angular/core';
import {Meta} from "@angular/platform-browser";
import {routes} from "../../constants/routes.const";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent {
  constructor(private readonly meta: Meta) {
    this.meta.updateTag({name: 'description', content: 'The place to find all terraria items and entities'});
  }

  public routes = routes;
}
