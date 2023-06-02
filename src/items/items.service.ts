import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Item, ItemDocument } from "../schemas/item.schema";
import { GroupedItems } from "../interfaces/GroupedItems";

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {
  }

  getAllItems() {
    return this.itemModel.find();
  }

  async getTotalNumber() {
    return this.itemModel.countDocuments();
  }

  async getRandomItem() {
    const result = await this.itemModel.countDocuments();
    return this.itemModel.findOne({ id: Math.ceil(Math.random() * result) });
  }

  async getCategories() {
    const result = await this.itemModel.distinct("category");
    result.splice(result.indexOf(""), 1);

    const groupedItems: GroupedItems[] = [];

    for (const item of result) {
      const group = item.group;
      const name = item.name;

      // find index of group, -1 if no group
      const i = groupedItems.findIndex((items) => items.group === group);

      // if the group exists, push new name to it
      if (i !== -1) {
        groupedItems[i].names.push(name);
      } else {
        // else, create a new group object
        groupedItems.push({ group: group, names: [name] });
      }
    }

    return groupedItems;
  }
}