import { Component } from '@angular/core';
import {GlobalModule} from "./components/global/global.module";
import {RouterOutlet} from "@angular/router";
import {ItemsModule} from "./components/items/items.module";
import {EntitiesModule} from "./components/entities/entities.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'thb-root',
  template: `
    <thb-header></thb-header>
    <main class="pt-16">
      <router-outlet></router-outlet>
    </main>
  `,
  standalone: true,
  imports: [
    GlobalModule,
    RouterOutlet,
    ItemsModule,
    EntitiesModule,
    FontAwesomeModule,
  ],
})
export class AppComponent {}
