import {Component, Input} from '@angular/core';
import {Entity} from "../../../interfaces/Entity";

@Component({
  selector: 'thb-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css'],
  standalone: true,
})
export class EntityComponent {
  @Input()
  entity!: Entity;
}
