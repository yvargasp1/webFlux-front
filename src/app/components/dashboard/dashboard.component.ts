import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../models/products/products.dto';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadProducts, loadedProducts } from '../../state/actions/products.actions';
import { Observable } from 'rxjs';
import { selectLoading, selectProductsList } from '../../state/selectors/products.selectors';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  providers: [ProductsService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  loading$: Observable<boolean> = new Observable()
  products$: Observable<any> = new Observable()
  constructor(
    private productService: ProductsService,
    private store: Store<any>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading)
    this.store.dispatch(loadProducts())
    this.products$ = this.store.select(selectProductsList)
    console.log(this.products$)
  }
  onProductForm() {
    this.router.navigate(['/form-product'])
  }
}
