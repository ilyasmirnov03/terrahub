import {CommonCategory} from "./common-category.interface";

/**
 * Representation of common properties between an item and a NPC
 */
export interface Entity {
  id: string;
  name: string;
  internalName: string;
  image: string | null;
  link: string;
  category: CommonCategory;
}
