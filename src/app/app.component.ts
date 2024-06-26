import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
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
    HeaderComponent,
  ],
})
export class AppComponent {}
