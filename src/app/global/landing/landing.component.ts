import {Component} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent {
  menuItems: Array<{ name: string, route: string | string[] }> = [
    {
      name: "All Items",
      route: "/items"
    },
    {
      name: "Items Collection",
      route: ["/items", "collection"],
    },
    {
      name: "All NPCs (coming soon)",
      route: "/entities"
    }
  ];
}
