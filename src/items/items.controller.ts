import { Controller, Get } from "@nestjs/common";
import { ItemsService } from "./items.service";

@Controller("items")
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get("all")
  getAllItems() {
    return this.itemsService.getAllItems();
  }
  @Get("total")
  getTotalNumber() {
    return this.itemsService.getTotalNumber();
  }
  @Get("random")
  getRandomItem() {
    return this.itemsService.getRandomItem();
  }
  @Get("categories")
  getCategories() {
    return this.itemsService.getCategories();
  }
}