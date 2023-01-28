import { Module } from "@nestjs/common";
import { ScraperController } from "./scraper.controller";
import { ScraperService } from "./scraper.service";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [
    HttpModule
  ],
  controllers: [ScraperController],
  providers: [ScraperService]
})
export class ScraperModule {}