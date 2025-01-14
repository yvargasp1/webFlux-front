import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../models/products/products.dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  providers: [ProductsService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  constructor(private productService: ProductsService) {}
  
  products! :Products[]

  ngOnInit(): void {
    console.log('Product service');
    this.productService.getProducts().subscribe({
      next:(value:Products[])=> {
        this.products = value
        console.log(this.products)
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
