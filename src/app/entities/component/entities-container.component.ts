import {Component, OnInit, ViewChild} from '@angular/core';
import {Entity} from '../../interfaces/Entity';
import {Category} from '../../interfaces/Category';
import {Meta} from '@angular/platform-browser';
import {EntitiesService} from '../services/entities.service';
import {FilterContainerComponent} from '../../filter/container/filter-container.component';

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

  /**
   * Filters menu component
   * @private
   */
  @ViewChild('filters')
  private filtersElement!: FilterContainerComponent;

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
