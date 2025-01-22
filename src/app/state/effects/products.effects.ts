import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { exhaustMap, map, catchError, of, mergeMap, tap } from 'rxjs'
import { ProductsService } from '../../services/products.service'
import * as ProductActions from '../actions/products.actions'
import { Router } from '@angular/router'
@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductsService,
    private router: Router
  ) {}

  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Product list] Load products'),
      exhaustMap(() =>
        this.productService.getProducts().pipe(
          map((products) => ({
            type: '[Product list] loaded products',
            products,
          })),
          catchError(() => of({ type: '[Product list] loaded products Error' }))
        )
      )
    )
  )

  saveProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.saveProduct),
      mergeMap((action) =>
        this.productService.saveProduct(action.product).pipe(
          map((saveProduct) =>
            ProductActions.saveProductSuccess({ product: saveProduct })
          ),
          catchError(() => of(ProductActions.saveProductFailure))
        )
      )
    )
  )
  redirectAfterSave$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProductActions.saveProductSuccess), // Escucha la acción de éxito
        tap(() => this.router.navigate(['/home'])) // Redirige al usuario
      ),
    { dispatch: false } // Indica que este efecto no despacha una acción
  )
}
