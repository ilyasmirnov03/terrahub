import {Component, OnInit, ViewChild} from '@angular/core';
import {Entity} from "../../interfaces/Entity";
import {Category} from "../../interfaces/Category";
import {FilterComponent} from "../../filter/component/filter.component";
import {Meta} from "@angular/platform-browser";
import {EntitiesService} from "../services/entities.service";

@Component({
  selector: 'app-entities-container',
  templateUrl: './entities-container.component.html'
})
export class EntitiesContainerComponent implements OnInit {
  public searchText = '';
  public entities: Entity[] = [];
  public filteredCategories: string[] = [];
  public categories: Category[] = [];
  public numberOfSelectedFilters = 0;

  @ViewChild("filters")
  private filtersElement!: FilterComponent;

  constructor(
    private readonly entitiesService: EntitiesService,
    private readonly meta: Meta
  ) {
    this.meta.updateTag({name: 'description', content: 'List of all terraria entities in the latest version'});

  }
  ngOnInit(): void {
    this.entitiesService.getEntities().subscribe(entities => {
      this.entities = entities;
    });
    this.entitiesService.getEntityCategories().subscribe(categories => {
      this.categories = categories;
    });

  }

  public handleMenu() {
    this.filtersElement.menuClosed = !this.filtersElement.menuClosed;
  }
}
