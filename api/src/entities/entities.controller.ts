import {Controller, Get} from '@nestjs/common';
import {EntitiesService} from './entities.service';

@Controller('entities')
export class EntitiesController {
    constructor(private readonly entitiesService: EntitiesService) {
    }

    @Get('')
    public getAllItems() {
        return this.entitiesService.getAllEntities();
    }

    @Get('total')
    public getTotalNumber() {
        return this.entitiesService.getTotalNumber();
    }

    @Get('categories')
    public getEntityCategories() {
        return this.entitiesService.getCategories();
    }

    @Get('random')
    public getRandomItem() {
        return this.entitiesService.getRandomEntity();
    }
}
