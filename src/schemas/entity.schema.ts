import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type EntityDocument = Entity & Document;

@Schema({ collection: "entities" })
export class Entity {
  @Prop()
  id: String;
  @Prop()
  name: String;
  @Prop()
  internalName: String;
  @Prop()
  image: String;
  @Prop()
  link: String;
}

export const EntitySchema = SchemaFactory.createForClass(Entity);