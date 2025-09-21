import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { ICONS } from 'src/app/constants/icons.const';

@Component({
  selector: 'thb-icon',
  standalone: true,
  template: '',
  host: {
    '[innerHTML]': 'iconHtml()',
  },
  styles: `
    :host {
      display: flex;
      justify-content: flex-end;
      width: 1em;
      height: 1em;
    }
 `,
})
export class IconComponent {
  icon = input.required<string>()
  iconHtml = computed(() => this._createIconHtml(this.icon()))

  private readonly _sanitizer = inject(DomSanitizer);

  private _createIconHtml(icon: string): SafeHtml {
    const iconHtml = ICONS[icon];
    if (iconHtml == null) {
      console.error(`icon ${icon} doesn't exist`);
    }

    return this._sanitizer.bypassSecurityTrustHtml(iconHtml ?? '');
  }
}
