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
import { FirebaseService } from '../../../../services/firebase.service'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [InputTextModule, ButtonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  ProductForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    file: new FormControl(''),
  })
  file: any
  constructor(private store: Store, private firebaseService: FirebaseService) {}

  async onSaveProduct() {
    const product: Products = new Products()
    product.name = this.ProductForm.get('name')?.value!
    product.price = Number(this.ProductForm.get('price')?.value!)
    if (this.file) {
      const imageURL = await this.firebaseService.saveImage(this.file)
      console.log(imageURL)
      product.image = imageURL
    }
    this.store.dispatch(saveProduct({ product: product }))
  }

  onDeleteFile() {
    this.ProductForm.get('file')?.setValue(null)
    this.file = null
  }

  onUploadFile(event: any) {
    if (event.target.files[0].type.startsWith('image/')) {
      this.ProductForm.get('file')?.setValue(event.target.files[0])
      this.file = event.target.files[0]
      console.log(this.ProductForm.get('file')?.value)
    }
  }
}
