import { Component, OnInit } from '@angular/core';
import { Entity } from '../../interfaces/entity.interface';
import { Category } from '../../interfaces/category.interface';
import { Meta } from '@angular/platform-browser';
import { NpcsService } from './services/npcs.service';
import { SearchInputComponent } from "../global/search-input/search-input.component";

import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollableWindow,
  CdkVirtualScrollViewport
} from "@angular/cdk/scrolling";
import { NpcComponent } from "./npc/npc.component";
import { SearchPipe } from "../../pipes/search.pipe";
import { FilterContainerComponent } from "../filter/container/filter-container.component";
import { FilterPipe } from "../filter/filter.pipe";

@Component({
  selector: 'thb-npcs-container',
  templateUrl: './npcs-container.component.html',
  imports: [
    SearchInputComponent,
    CdkVirtualScrollViewport,
    CdkVirtualScrollableWindow,
    CdkFixedSizeVirtualScroll,
    NpcComponent,
    CdkVirtualForOf,
    SearchPipe,
    FilterContainerComponent,
    FilterPipe
  ]
})
export class NpcsContainerComponent implements OnInit {
  /**
   * Text used as filter for searching npcs
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
    private readonly entitiesService: NpcsService,
    private readonly meta: Meta
  ) {
    this.meta.updateTag({ name: 'description', content: 'List of all terraria npcs in the latest version' });
  }

  /**
   * Get npcs and categories from the backend
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
