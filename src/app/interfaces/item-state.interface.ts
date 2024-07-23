import {Item} from "./item.interface";

/**
 * Item
 */
export interface ItemState extends Item {
  completed?: boolean;
}
