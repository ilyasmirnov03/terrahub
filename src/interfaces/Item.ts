import {Category} from './Category';

export interface Item {
    id: string;
    name: string;
    internalName: string;
    category: Category;
    link: string | null;
    version: string | null;
    image: string | null;
}
