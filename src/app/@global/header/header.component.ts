import {Component, OnInit} from '@angular/core';
import {headerNavigation} from '../../constants/header-navigation.const';
import {Event, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
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
