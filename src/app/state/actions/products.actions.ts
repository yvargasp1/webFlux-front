import { createAction, props } from "@ngrx/store";
import { Products } from "../../models/products/products.dto";

export const loadProducts = createAction(
 '[Product list] Load products'
)

export const loadedProducts = createAction(
 '[Product list] loaded products' , props<{products:Products[]}>()
)

export const saveProduct = createAction(
  '[Product] Save Product',
  props<{ product: Products }>()
)


export const saveProductSuccess = createAction(
  '[Product] Save',
  props<{ product: Products }>()
)


export const saveProductFailure = createAction(
  '[Product] Save Product Failure',
  props<{ error: any }>()
)