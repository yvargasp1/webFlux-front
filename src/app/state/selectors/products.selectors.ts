import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ProductState } from "../../models/products/products.state";

export const selectProductFeature = (state:AppState) => state.products;

export const selectProductsList = createSelector(
 selectProductFeature,
 (state:ProductState) => state.products
)
export const selectLoading = createSelector(
 selectProductFeature,
 (state:ProductState) => state.loading
)