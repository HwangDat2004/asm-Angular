import { Component, inject } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { RouterLink } from '@angular/router';
import { Product } from '../../../types/product';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  products: Product[] = [];
  productService = inject(ProductService);
  toast = inject(HotToastService);

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (e) => {
        console.log(e);
        this.toast.error('Error: ' + e.message);
      },
    });
  }
}