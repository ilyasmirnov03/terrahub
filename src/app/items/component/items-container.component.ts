import {Component, OnInit, ViewChild} from '@angular/core';
import {Item} from '../../interfaces/Item';
import {Category} from '../../interfaces/Category';
import {NgxIndexedDBService} from 'ngx-indexed-db';
import {CompletedItem} from '../../interfaces/CompletedItem';
import {ActivatedRoute} from '@angular/router';
import {Meta} from '@angular/platform-browser';
import {ItemsService} from '../services/items.service';
import {FilterContainerComponent} from '../../filter/container/filter-container.component';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html'
})
export class ItemsContainerComponent implements OnInit {

  /**
   * Items array from the backend
   */
  public items: Item[] = [];

  /**
   * Categories array from the backend
   */
  public categories: Category[] = [];

  /**
   * Determines whether the route is in collection mode
   */
  public collectionMode!: boolean;

  /**
   * Array of filtered categories
   */
  public filteredCategories: string[] = [];

  /**
   * Text used as filter for searching items
   */
  public searchText: string = '';

  /**
   * Number of completed items for collection mode
   */
  public completedItems: number = 0;

  /**
   * Filters menu element
   * @private
   */
  @ViewChild('filters')
  private filtersElement!: FilterContainerComponent;

  constructor(
    private readonly itemsService: ItemsService,
    private readonly dbService: NgxIndexedDBService,
    private readonly route: ActivatedRoute,
    private readonly meta: Meta
  ) {
    this.meta.updateTag({name: 'description', content: 'List of all terraria items in the latest version'});
    this.itemsService.collectedItems.subscribe(value => {
      this.completedItems = value;
    });
  }

  /**
   * Get items and categories from database
   */
  public ngOnInit(): void {
    this.collectionMode = !!this.route.snapshot.paramMap.get('collection');
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
    this.dbService.getAll('items').subscribe(completedItems => {
      this.itemsService.collectedItems.next(completedItems.length);
      completedItems.forEach(item => {
        // Find item object with matching id and if was found assign completed to true
        const foundObject = this.items.find(obj => obj.id === (item as CompletedItem).id);
        if (foundObject) {
          foundObject.completed = true;
        }
      });
    });
  }

  /**
   * @desc Toggle filters menu
   * @event click
   * @param $event
   */
  public handleMenu($event: MouseEvent) {
    $event.stopPropagation();
    this.filtersElement.menuClosed = !this.filtersElement.menuClosed;
  }
}
