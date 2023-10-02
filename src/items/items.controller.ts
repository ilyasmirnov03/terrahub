import {Controller, Get, Query} from '@nestjs/common';
import {ItemsService} from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {
    }

    @Get('')
    public getAllItems(
        @Query('fields') fields: string,
    ) {
        return this.itemsService.getAllItems(fields);
    }

    @Get('total')
    public getTotalNumber() {
        return this.itemsService.getTotalNumber();
    }

    @Get('random')
    public getRandomItem() {
        return this.itemsService.getRandomItem();
    }

    @Get('categories')
    public getCategories() {
        return this.itemsService.getCategories();
    }
}