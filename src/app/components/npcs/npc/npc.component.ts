import {Component, Input} from '@angular/core';
import {Entity} from "../../../interfaces/entity.interface";

@Component({
  selector: 'thb-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.css'],
  standalone: true,
})
export class NpcComponent {
  @Input()
  entity!: Entity;
}
