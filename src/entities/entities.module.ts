import { Module } from '@nestjs/common';
import { EntitiesController } from "./entities.controller";
import { EntitiesService } from "./entities.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Entity, EntitySchema } from "../schemas/entity.schema";
import { CategoriesModule } from "../services/categories.module";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Entity.name, schema: EntitySchema}]),
    CategoriesModule
  ],
  controllers: [EntitiesController],
  providers: [EntitiesService]
})
export class EntitiesModule {}
