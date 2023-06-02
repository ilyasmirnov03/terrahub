import {Component, OnInit} from '@angular/core';
import {TerraHubService} from "../../services/terra-hub.service";
import {Entity} from "../../interfaces/Entity";

@Component({
  selector: 'app-entities-container',
  templateUrl: './entities-container.component.html'
})
export class EntitiesContainerComponent implements OnInit {
  public searchText = '';
  public entities: Entity[] = [];

  constructor(private readonly terraHubService: TerraHubService) {
  }
  ngOnInit() {
    this.terraHubService.getEntities().subscribe(entities => {
      this.entities = entities;
    });
  }
}
