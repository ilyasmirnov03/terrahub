import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent {
  @ViewChild("search") input!: ElementRef;
  timer!: ReturnType<typeof setTimeout>;
  searchForItem() {
    clearTimeout(this.timer);
    this.timer = setTimeout(()=> {
      document.querySelectorAll(".search-info").forEach((item) => {
        const text = item.textContent||"";
        const found: boolean = text.toLocaleLowerCase().includes(this.input.nativeElement.value.toLowerCase());
        // @ts-ignore
        item.parentElement.classList.toggle("hidden", !found);
      });
    }, 500);
  }
}
