import { createReducer, on } from '@ngrx/store'
import { ProductState } from '../../models/products/products.state'
import { loadProducts, loadedProducts } from '../actions/products.actions'
import * as ProductActions from '../actions/products.actions'

export const initialState: ProductState = {
  loading: false,
  products: [],
}

export const productsReducer = createReducer(
  initialState,
  on(loadProducts, (state) => {
    return {
      ...state,
      loading: true,
    }
  }),
  on(loadedProducts, (state, { products }) => {
    return {
      ...state,
      loading: true,
      products,
    }
  }),
  on(ProductActions.saveProduct, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProductActions.saveProductSuccess, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
    loading: false,
  })),
  on(ProductActions.saveProductFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
)
