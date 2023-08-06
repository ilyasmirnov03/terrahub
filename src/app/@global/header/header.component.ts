import {Component, ElementRef, ViewChild} from '@angular/core';
import {headerNavigation} from "../../constants/header-navigation.const";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('menu')
  private menu!: ElementRef;

  public isOpened = false;
  public routes = headerNavigation;

  public handleMenu() {
    this.menu.nativeElement.classList.toggle('translate-x-full');
    this.isOpened = !this.isOpened;
  }
}
