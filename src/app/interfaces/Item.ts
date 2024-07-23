import {ItemCategory} from "./ItemCategory";

/**
 * Item entity
 */
export interface Item {
  id: string,
  name: string,
  internalName: string,
  category: ItemCategory,
  link: string,
  completed?: boolean,
  image: string | null
}
