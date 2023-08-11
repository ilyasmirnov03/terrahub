import {Component, ElementRef, ViewChild} from '@angular/core';
import {headerNavigation} from "../../constants/header-navigation.const";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  /**
   * Menu element
   * @private
   */
  @ViewChild('menu')
  private menu!: ElementRef;

  /**
   * Determines if the menu is opened
   */
  public isOpened = false;
  /**
   * Available routes to display in the header
   */
  public routes = headerNavigation;

  /**
   * @description Handle opening and closing menu
   * @event click
   */
  public handleMenu() {
    this.menu.nativeElement.classList.toggle('translate-x-full');
    this.isOpened = !this.isOpened;
  }
}
