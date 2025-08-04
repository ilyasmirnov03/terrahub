import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {ItemsModule} from './items/items.module';
import {ConfigModule} from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';
import {ScraperModule} from './scraper/scraper.module';
import {EntitiesModule} from './entities/entities.module';
import {CategoriesService} from './services/categories.service';

@Module({
    imports: [
        ItemsModule,
        ScraperModule,
        EntitiesModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        MongooseModule.forRoot(process.env.URL, {dbName: 'terrahub'}),
    ],
    controllers: [AppController],
    providers: [CategoriesService],
})
export class AppModule {
}
