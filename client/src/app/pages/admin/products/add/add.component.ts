import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../../services/products.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  addForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    image: new FormControl(''),
    description: new FormControl(''),
  });

  productService = inject(ProductService);
  router = inject(Router);
  toast = inject(HotToastService);

  handleaddSubmit() {
    console.log(this.addForm.value);
    this.productService.createProduct(this.addForm.value).subscribe({
      next: () => {
        this.toast.success('Add Product');
        this.router.navigateByUrl('/admin/list');
      },
      error: () => {
        this.toast.error('Error');
      },
    });
    }

  }
