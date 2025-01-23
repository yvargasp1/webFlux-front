import { createReducer, on } from '@ngrx/store'
import { ProductState } from '../../models/products/products.state'
import { loadProducts, loadedProducts } from '../actions/products.actions'
import * as ProductActions from '../actions/products.actions'
import { state } from '@angular/animations'

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
  })),
  on(ProductActions.deleteProduct, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProductActions.deleteProductSuccess, (state, { id }) => ({
    ...state,
    loading: true,
    products: state.products.filter((product) => product.id !== id),
  })),
  on(ProductActions.deleteProductFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
)
