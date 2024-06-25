import {Component, OnInit, Signal} from '@angular/core';
import {Item} from '../../../interfaces/Item';
import {Category} from '../../../interfaces/Category';
import {NgxIndexedDBService} from 'ngx-indexed-db';
import {CompletedItem} from '../../../interfaces/CompletedItem';
import {ActivatedRoute} from '@angular/router';
import {Meta} from '@angular/platform-browser';
import {ItemsService} from '../services/items.service';

@Component({
  selector: 'thb-items-container',
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
   * Amount of completed items
   */
  public completedItems: Signal<number>;

  constructor(
    private readonly itemsService: ItemsService,
    private readonly dbService: NgxIndexedDBService,
    private readonly route: ActivatedRoute,
    private readonly meta: Meta
  ) {
    this.meta.updateTag({name: 'description', content: 'List of all terraria items in the latest version'});
    this.completedItems = this.itemsService.collectedItems.asReadonly();
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
      this.itemsService.collectedItems .set(completedItems.length);
      completedItems.forEach(item => {
        // Find item object with matching id and if was found assign completed to true
        const foundObject = this.items.find(obj => obj.id === (item as CompletedItem).id);
        if (foundObject) {
          foundObject.completed = true;
        }
      });
    });
  }
}
