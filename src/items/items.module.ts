import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import {ItemsController} from './items.controller';
import {ItemsService} from './items.service';
import {Item, ItemSchema} from '../schemas/item.schema';
import {CategoriesModule} from '../services/categories.module';

@Module({
    imports: [
        MongooseModule.forFeature([{name: Item.name, schema: ItemSchema}]),
        CategoriesModule
    ],
    controllers: [ItemsController],
    providers: [ItemsService]
})
export class ItemsModule {
}