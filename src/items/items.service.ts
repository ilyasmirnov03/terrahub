import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Item, ItemDocument } from "./schemas/item.schema";

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}
  getAllItems() {
    return this.itemModel.find();
  }
  async getTotalNumber() {
    const result = await this.itemModel.find();
    return result.length;
  }
  async getRandomItem() {
    const result = await this.itemModel.find();
    return this.itemModel.findOne({id: Math.ceil(Math.random() * result.length)});
  }
}