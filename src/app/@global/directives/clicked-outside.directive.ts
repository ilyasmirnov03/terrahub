import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

/**
 * Directive to use on menus that are covering a portion of the screen
 */
@Directive({
  selector: '[clickedOutside]'
})
export class ClickedOutsideDirective {

  constructor(
    private readonly elementRef: ElementRef
  ) {
  }

  /**
   * Emit mouse event if a click outside was performed
   */
  @Output()
  public clickOutside: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  /**
   * @desc Listen for click and emit an event if a click outside was performed
   * @event click
   */
  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }

}
