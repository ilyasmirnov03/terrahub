import { Controller, Get } from "@nestjs/common";
import { ScraperService } from "./scraper.service";

@Controller("scrape")
export class ScraperController {
  constructor(private readonly scraperService: ScraperService) {}
  @Get("items")
  getWikiPage() {
    return this.scraperService.getWikiPage();
  }
}