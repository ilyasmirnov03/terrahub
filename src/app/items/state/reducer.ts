import {ActionReducer, createReducer, MetaReducer, on} from "@ngrx/store";
import {CompleteItem, RemoveItem, SetItems} from "./actions";
import {CompletedItem} from "../interfaces/CompletedItem";

const initialState: CompletedItem[] = [];

function log(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    return reducer(state, action);
  }
}

export const metaReducers: MetaReducer[] = [log];

export const itemReducer = createReducer(
  initialState,
  on(SetItems, (state, {completedItems}) => {
    return {
      ...state,
      completedItems
    }
  }),
  on(CompleteItem, (state: any, {completedItems}) => {
    return {
      ...state,
      completedItems: [...state.completedItems, completedItems]
    }
  }),
  on(RemoveItem, (state: any, {completedItems}) => {
    return {
      ...state,
      completedItems: state.completedItems.filter((i: CompletedItem) => i.id !== completedItems.id)
    }
  }),
);

