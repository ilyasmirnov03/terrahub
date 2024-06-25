import {Component, OnInit} from '@angular/core';
import {Event, NavigationEnd, Router, RouterLink} from '@angular/router';
import {headerNavigation} from "../../../constants/header-navigation.const";
import {NgClass, NgForOf} from "@angular/common";
import {ClickedOutsideDirective} from "../directives/clicked-outside.directive";
import {ButtonComponent} from "../button/button.component";
import {ThemeSwitcherComponent} from "../theme-switcher/theme-switcher.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'thb-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    NgClass,
    ClickedOutsideDirective,
    ButtonComponent,
    NgForOf,
    ThemeSwitcherComponent,
    RouterLink,
    FaIconComponent
  ]
})
export class HeaderComponent implements OnInit {

  /**
   * Determines if the menu is closed
   */
  public isClosed = true;

  /**
   * Available routes to display in the header
   */
  public routes = headerNavigation;

  constructor(
    private readonly router: Router,
  ) {
  }

  /**
   * Subscribe to route changes to close menu
   */
  public ngOnInit(): void {
    this.router.events.subscribe((event: Event): void => {
      if (event instanceof NavigationEnd) {
        this.isClosed = true;
      }
    });
  }

  /**
   * @description Handle opening and closing menu
   * @param toClose A boolean that determines header open state
   * @event click
   */
  public handleMenu(toClose: null | boolean = null): void {
    if (!toClose) {
      this.isClosed = !this.isClosed;
    } else {
      this.isClosed = toClose;
    }
  }
}
