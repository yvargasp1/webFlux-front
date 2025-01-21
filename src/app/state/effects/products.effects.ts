import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, catchError, of } from "rxjs";
import { ProductsService } from "../../services/products.service";

@Injectable()
export class ProductsEffects {
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

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}
}