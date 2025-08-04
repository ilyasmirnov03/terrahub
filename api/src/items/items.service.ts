import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Item, ItemDocument} from '../schemas/item.schema';
import {CategoriesService} from '../services/categories.service';

@Injectable()
export class ItemsService {
    constructor(
        @InjectModel(Item.name) private itemModel: Model<ItemDocument>,
        private readonly categoriesService: CategoriesService) {
    }

    /**
     * Get all items.
     * If fields were specified, return items with only specified fields.
     */
    public getAllItems(queryFields: string | undefined) {
        const fieldsToQuery = queryFields !== undefined ? queryFields.split(',').join(' ') : '';
        return this.itemModel.find({}, fieldsToQuery);
    }

    public async getTotalNumber() {
        return this.itemModel.countDocuments();
    }

    public async getRandomItem() {
        const result = await this.itemModel.countDocuments();
        return this.itemModel.findOne({id: Math.ceil(Math.random() * result)});
    }

    public async getCategories() {
        const result = await this.itemModel.distinct('category');
        return this.categoriesService.getGroupedItems(result);
    }
}