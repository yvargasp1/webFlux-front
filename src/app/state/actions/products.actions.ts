import { createAction, props } from "@ngrx/store";
import { Products } from "../../models/products/products.dto";

export const loadProducts = createAction(
 '[Product list] Load products'
)

export const loadedProducts = createAction(
 '[Product list] loaded products' , props<{products:Products[]}>()
)