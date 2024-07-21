import {CompletedItem} from "../interfaces/CompletedItem";

/**
 * Check if passed object actually is of expected type
 * @param object can be anything - thus typed as any
 */
export function isCompletedItem(object: any): object is CompletedItem {
  return object.hasOwnProperty('id') && object.hasOwnProperty('completed')
    && typeof object['completed'] === 'boolean' && typeof object['id'] === 'string';
}
