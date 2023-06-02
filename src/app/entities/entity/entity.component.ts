import {Component, Input} from '@angular/core';
import {Entity} from "../../interfaces/Entity";

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html'
})
export class EntityComponent {
  @Input()
  entity!: Entity;
}
