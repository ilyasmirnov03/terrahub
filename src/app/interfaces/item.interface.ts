import {CommonCategory} from "./common-category.interface";

/**
 * Represents a terraria item in the database
 */
export interface Item {
  id: string,
  name: string,
  internalName: string,
  category: CommonCategory,
  link: string,
  image: string | null
}
