import {Component, OnInit} from '@angular/core';
import {Entity} from '../../interfaces/entity.interface';
import {Category} from '../../interfaces/category.interface';
import {Meta} from '@angular/platform-browser';
import {EntitiesService} from './services/entities.service';
import {SearchInputComponent} from "../global/search-input/search-input.component";
import {NgIf} from "@angular/common";
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollableWindow,
  CdkVirtualScrollViewport
} from "@angular/cdk/scrolling";
import {EntityComponent} from "./entity/entity.component";
import {SearchPipe} from "../../pipes/search.pipe";
import {faSliders} from "@fortawesome/free-solid-svg-icons";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {FilterContainerComponent} from "../filter/container/filter-container.component";
import {FilterPipe} from "../filter/filter.pipe";

@Component({
  selector: 'thb-entities-container',
  templateUrl: './entities-container.component.html',
  standalone: true,
  imports: [
    SearchInputComponent,
    NgIf,
    CdkVirtualScrollViewport,
    CdkVirtualScrollableWindow,
    CdkFixedSizeVirtualScroll,
    EntityComponent,
    CdkVirtualForOf,
    SearchPipe,
    FilterContainerComponent,
    FilterPipe
  ]
})
export class EntitiesContainerComponent implements OnInit {
  /**
   * Text used as filter for searching entities
   */
  public searchText = '';

  /**
   * Entities array
   */
  public entities: Entity[] = [];

  /**
   * Categories array
   */
  public categories: Category[] = [];

  /**
   * Filtered categories array
   */
  public filteredCategories: string[] = [];

  constructor(
    library: FaIconLibrary,
    private readonly entitiesService: EntitiesService,
    private readonly meta: Meta
  ) {
    this.meta.updateTag({name: 'description', content: 'List of all terraria entities in the latest version'});
    library.addIcons(faSliders);
  }

  /**
   * Get entities and categories from the backend
   */
  public ngOnInit(): void {
    this.entitiesService.getEntities().subscribe(entities => {
      this.entities = entities;
    });
    this.entitiesService.getEntityCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}
