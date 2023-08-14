import {Controller, Get} from '@nestjs/common';
import {ScraperService} from './scraper.service';

@Controller('scrape')
export class ScraperController {
    constructor(private readonly scraperService: ScraperService) {
    }

    @Get('items')
    public getItemsFromWiki() {
        return this.scraperService.getItemsFromWiki();
    }

    @Get('npcs')
    public getNPCsFromWiki() {
        return this.scraperService.getNPCsFromWiki();
    }
}