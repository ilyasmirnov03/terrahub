// Main module

import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ItemsModule } from "./items/items.module";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { ScraperModule } from "./scraper/scraper.module";
import { EntitiesModule } from './entities/entities.module';
import { CategoriesService } from "./services/categories.service";
import { CategoriesModule } from "./services/categories.module";

@Module({
  imports: [
    ItemsModule,
    ScraperModule,
    EntitiesModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`
    }),
    MongooseModule.forRoot(process.env.URL, { dbName: "terrahub" }),
  ],
  controllers: [AppController],
  providers: [AppService, CategoriesService],
})
export class AppModule {
}
