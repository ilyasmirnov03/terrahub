import {Item} from "./item.interface";

/**
 * Item with properties used only in front-end
 */
export interface ItemState extends Item {
  completed?: boolean;
}
