import { Controller, Get } from "@nestjs/common";
import { EntitiesService } from "./entities.service";

@Controller("entities")
export class EntitiesController {
  constructor(private readonly entitiesService: EntitiesService) {
  }

  @Get("")
  getAllItems() {
    return this.entitiesService.getAllEntities();
  }

  @Get("total")
  getTotalNumber() {
    return this.entitiesService.getTotalNumber();
  }

  @Get("random")
  getRandomItem() {
    return this.entitiesService.getRandomEntity();
  }
}
