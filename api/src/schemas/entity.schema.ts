import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type EntityDocument = Entity & Document;

class Category {
    group: string;

    name: string;
}

@Schema({
    collection: 'entities',
    toJSON: {
        transform: (_doc, ret) => {
            delete ret._id;
        },
    }
})
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

    @Prop()
    version: String;

    @Prop()
    category: Category;
}

export const EntitySchema = SchemaFactory.createForClass(Entity);