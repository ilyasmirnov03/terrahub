import {createAction, props} from "@ngrx/store";
import {CompletedItem} from "../interfaces/CompletedItem";

export enum ActionTypes {
  SetItems = '[Completed Component] Set',
  CompleteItem = '[Completed Component] New',
  RemoveItem = '[Completed Component] Remove',
}

export const SetItems = createAction(ActionTypes.SetItems, props<{ completedItems: CompletedItem[] }>());
export const CompleteItem = createAction(ActionTypes.CompleteItem, props<{ completedItems: CompletedItem }>());
export const RemoveItem = createAction(ActionTypes.RemoveItem, props<{ completedItems: CompletedItem }>());
