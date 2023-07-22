import {Component} from '@angular/core';
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent {
  constructor(private readonly meta: Meta) {
    this.meta.updateTag({name: 'description', content: 'The place to find all terraria items and entities'});
  }

  public menuItems: Array<{ name: string, route: string | string[] }> = [
    {
      name: "All Items",
      route: "/items"
    },
    {
      name: "Items Collection",
      route: ["/items", "collection"],
    },
    {
      name: "All NPCs",
      route: "/npcs"
    }
  ];
}
