// Main module

import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ItemsModule } from "./items/items.module";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { ScraperModule } from "./scraper/scraper.module";

@Module({
  imports: [
    ItemsModule,
    ScraperModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`
    }),
    MongooseModule.forRoot(process.env.URL, { dbName: "terrahub" })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
