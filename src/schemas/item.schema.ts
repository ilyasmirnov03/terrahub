import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type ItemDocument = Item & Document;

class Category {
    group: string;

    name: string;
}

@Schema({
    collection: 'items',
    toJSON: {
        transform: (_doc, ret) => {
            delete ret._id;
        },
    }
})
export class Item {
    @Prop()
    id: String;

    @Prop()
    name: String;

    @Prop()
    internalName: String;

    @Prop()
    version: String;

    @Prop()
    link: String;

    @Prop()
    category: Category;
}

export const ItemSchema = SchemaFactory.createForClass(Item);