import {Component, OnInit} from '@angular/core';
import {Item} from "../../../Item";
import {ItemsService} from "../../../services/items.service";

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.css']
})
export class ItemsContainerComponent implements OnInit{
  constructor(
    private itemsService: ItemsService
  ) {}
  items: Item[] = [];

  //get items from database
  ngOnInit() {
    this.itemsService.getItems().subscribe((items) => {this.items = items});
  }

}
