import {Component, Input, OnInit, Signal} from '@angular/core';
import {Item} from '../../interfaces/item.interface';
import {Category} from '../../interfaces/category.interface';
import {Meta} from '@angular/platform-browser';
import {ItemsService} from './services/items.service';
import {NgIf} from "@angular/common";
import {SearchInputComponent} from "../global/search-input/search-input.component";
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollableWindow,
  CdkVirtualScrollViewport
} from "@angular/cdk/scrolling";
import {SearchPipe} from "../../pipes/search.pipe";
import {ItemsHeaderComponent} from "./items-header/items-header.component";
import {ItemComponent} from "./item/item.component";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faSliders} from "@fortawesome/free-solid-svg-icons";
import {FilterContainerComponent} from "../filter/container/filter-container.component";
import {FilterPipe} from "../filter/filter.pipe";
import {ItemsIndexedDbService} from "../../services/items-indexed-db.service";
import {ItemState} from "../../interfaces/item-state.interface";

@Component({
  selector: 'thb-items-container',
  templateUrl: './items-container.component.html',
  standalone: true,
  imports: [
    NgIf,
    SearchInputComponent,
    CdkVirtualScrollViewport,
    CdkVirtualForOf,
    SearchPipe,
    CdkVirtualScrollableWindow,
    CdkFixedSizeVirtualScroll,
    ItemsHeaderComponent,
    ItemComponent,
    FilterContainerComponent,
    FilterPipe
  ]
})
export class ItemsContainerComponent implements OnInit {

  /**
   * Items array from the backend
   */
  public items: ItemState[] = [];

  /**
   * Categories array from the backend
   */
  public categories: Category[] = [];

  /**
   * Determines whether the route is in collection mode
   */
  @Input()
  public collectionMode = false;

  /**
   * Array of filtered categories
   */
  public filteredCategories: string[] = [];

  /**
   * Text used as filter for searching items
   */
  public searchText = '';

  /**
   * Amount of completed items
   */
  public completedItems: Signal<number>;

  constructor(
    library: FaIconLibrary,
    private readonly itemsService: ItemsService,
    private readonly meta: Meta,
    private readonly itemsIndexedDbService: ItemsIndexedDbService,
  ) {
    this.meta.updateTag({name: 'description', content: 'List of all terraria items in the latest version'});
    this.completedItems = this.itemsService.collectedItems.asReadonly();
    library.addIcons(faSliders);
  }

  /**
   * Get items and categories from database
   */
  public ngOnInit(): void {
    // Get items
    this.itemsService.getItems().subscribe((items: Item[]) => {
      this.items = items;
      // Get all entries from indexedDB if in collection mode
      if (this.collectionMode) {
        this.initCompletedItems();
      }
    });
    // Get categories
    this.itemsService.getItemsCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  /**
   * Assign completed state to stored indexedDB items
   * @private
   */
  private initCompletedItems(): void {
    this.itemsIndexedDbService.getAll().subscribe(completedItems => {
      this.itemsService.collectedItems.set(completedItems.length);
      completedItems.forEach(item => {
        // Find item object with matching id and if was found assign completed to true
        const foundObject = this.items.find(obj => obj.id === item.id);
        if (foundObject) {
          foundObject.completed = true;
        }
      });
    });
  }
}
