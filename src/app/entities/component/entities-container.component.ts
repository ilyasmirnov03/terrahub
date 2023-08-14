import {Component, OnInit} from '@angular/core';
import {Entity} from '../../interfaces/Entity';
import {Category} from '../../interfaces/Category';
import {Meta} from '@angular/platform-browser';
import {EntitiesService} from '../services/entities.service';

@Component({
  selector: 'app-entities-container',
  templateUrl: './entities-container.component.html'
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
    private readonly entitiesService: EntitiesService,
    private readonly meta: Meta
  ) {
    this.meta.updateTag({name: 'description', content: 'List of all terraria entities in the latest version'});
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
