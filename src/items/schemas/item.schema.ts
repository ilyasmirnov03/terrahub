import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ItemDocument = Item & Document;

@Schema({ collection: "items" })
export class Item {
  @Prop()
  id: String;
  @Prop()
  name: String;
  @Prop()
  internalName: String;
}

export const ItemSchema = SchemaFactory.createForClass(Item);