import {Component, Input} from '@angular/core';
import {Entity} from "../../../interfaces/Entity";

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent {
  @Input()
  entity!: Entity;
}
