import { Component } from '@angular/core'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { Store } from '@ngrx/store'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { saveProduct } from '../../../../state/actions/products.actions'
import { Products } from '../../../../models/products/products.dto'

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [InputTextModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  ProductForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  })

  constructor(private store: Store) {}

  onSaveProduct() {
    const product: Products = new Products()
    product.name = this.ProductForm.get('name')?.value!
    product.price = Number(this.ProductForm.get('price')?.value!)
    this.store.dispatch(saveProduct({ product: product }))
    
  }
}
