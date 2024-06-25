import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'thb-theme-switcher',
  templateUrl: './theme-switcher.component.html'
})
export class ThemeSwitcherComponent implements OnInit {
  /**
   * Determines if dark mode is on or off
   */
  public isDarkMode: boolean = false;

  /**
   * Image to display in the switcher
   */
  public imagePath: string = '';

  /**
   * Toggle dark mode on init depending on user settings
   */
  public ngOnInit(): void {
    this.isDarkMode = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', this.isDarkMode);
    this.assignImagePath();
  }

  /**
   * Toggles dark mode on and off
   */
  public switchTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
    this.setLightOrDarkMode(this.isDarkMode);
    this.assignImagePath();
  }

  /**
   * Set light or dark mode parameter in localStorage
   * @param isDarkMode
   * @private
   */
  private setLightOrDarkMode(isDarkMode: boolean): void {
    if (isDarkMode) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }

  /*
   * Get corresponding image to the current theme
   * @private
   */
  private assignImagePath(): void {
    const  getRandomImage = (factor: number) => Math.floor(Math.random() * factor);
    this.imagePath = `/assets/images/${this.isDarkMode ? 'Moon_' + getRandomImage(9) : 'sun'}.png`;
  }
}
