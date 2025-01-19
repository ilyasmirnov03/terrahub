import {Entity} from "./entity.interface";

/**
 * Item with properties used only in front-end
 */
export interface ItemState extends Entity {
  completed?: boolean;
}
