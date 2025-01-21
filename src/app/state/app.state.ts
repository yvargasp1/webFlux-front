import { ActionReducerMap } from "@ngrx/store";
import { ProductState } from "../models/products/products.state";
import { productsReducer } from "./reducer/products.reducer";

export interface AppState{
  products : ProductState
}

export const ROOT_REDUCERS : ActionReducerMap<AppState> = {
 products : productsReducer
}