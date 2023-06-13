import {Component, OnInit} from '@angular/core';
import {TerraHubService} from "../../services/terra-hub.service";
import {Entity} from "../../interfaces/Entity";
import {Category} from "../../interfaces/Category";

@Component({
  selector: 'app-entities-container',
  templateUrl: './entities-container.component.html'
})
export class EntitiesContainerComponent implements OnInit {
  public searchText = '';
  public entities: Entity[] = [];
  public filteredCategories: string[] = [];
  public categories: Category[] = [];

  constructor(private readonly terraHubService: TerraHubService) {
  }
  ngOnInit() {
    this.terraHubService.getEntities().subscribe(entities => {
      this.entities = entities;
    });
    this.terraHubService.getEntityCategories().subscribe(categories => {
      this.categories = categories;
    });

  }
}
