import {CommonCategory} from "./common-category.interface";

/**
 * Terraria entity (npc)
 */
export interface Entity {
  id: string;
  name: string;
  internalName: string;
  image: string;
  link: string;
  category: CommonCategory;
}
