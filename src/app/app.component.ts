import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {ItemsModule} from "./components/items/items.module";
import {EntitiesModule} from "./components/entities/entities.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HeaderComponent} from "./components/global/header/header.component";

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
    RouterOutlet,
    ItemsModule,
    EntitiesModule,
    FontAwesomeModule,
    HeaderComponent,
  ],
})
export class AppComponent {}
