import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../../../services/products.service';



@Component({
  selector: 'app-create',
  standalone: true,
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers: [ ],
})
export class ProductCreateComponent {
  productService = inject(ProductService);
  router = inject(Router);

  addProductForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    isShow: new FormControl(true),
    startAt: new FormControl(''),
    bidTime: new FormControl(''),
  });
  messageService: any;
  handleCreateProduct() {
    console.log(this.addProductForm.value);
    this.productService
      .createProduct({ ...this.addProductForm.value, endAt: new Date() })
      .subscribe({
        next: () => {
          console.log('aa');
          this.messageService.add({
            severity: 'success',
            summary: 'Create Product',
            detail: 'Thanh Cong',
          });
          setTimeout(
            () => this.router.navigate(['/admin/products/list']),
            1000
          );
        },
        error: (error) => {
          // show error
          console.error(error.message);
        },
      });
  }
}