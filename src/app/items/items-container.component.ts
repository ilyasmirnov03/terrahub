import {Component, OnInit, ViewChild} from '@angular/core';
import {Item} from "../interfaces/Item";
import {TerraHubService} from "../services/terra-hub.service";
import {Category} from "../interfaces/Category";
import {NgxIndexedDBService} from "ngx-indexed-db";
import {CompletedItem} from "../interfaces/CompletedItem";
import {ActivatedRoute} from "@angular/router";
import {FilterComponent} from "../filter/component/filter.component";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html'
})
export class ItemsContainerComponent implements OnInit {

  //variables assigned by a service
  public items: Item[] = [];
  public categories: Category[] = [];
  public collectionMode!: boolean;
  //variables used to search and component items
  public filteredCategories: string[] = [];
  public searchText: string = "";
  public numberOfSelectedFilters = 0;
  public completedItems: number = 0;

  // children elements
  @ViewChild("filters")
  private filtersElement!: FilterComponent;

  constructor(
    private readonly terraHubService: TerraHubService,
    private readonly dbService: NgxIndexedDBService,
    private readonly route: ActivatedRoute,
    private readonly meta: Meta
  ) {
    this.meta.updateTag({name: 'description', content: 'List of all terraria items in the latest version'});
    this.terraHubService.collectedItems.subscribe(value => {
      this.completedItems = value;
    });
  }

  //get items and categories from database
  ngOnInit() {
    this.collectionMode = !!this.route.snapshot.paramMap.get("collection");
    this.terraHubService.getItems().subscribe((items) => {
      this.items = items;
      // get all entries from indexedDB
      this.dbService.getAll('items').subscribe(completedItems => {
        this.terraHubService.collectedItems.next(completedItems.length);
        completedItems.forEach(item => {
          // find item object with matching id and if was found assign completed to true
          const foundObject = this.items.find(obj => obj.id === (item as CompletedItem).id);
          if (foundObject) foundObject.completed = true;
        });
      });
    });
    // get categories
    this.terraHubService.getItemsCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  public handleMenu() {
    this.filtersElement.menuClosed = !this.filtersElement.menuClosed;
  }
}
