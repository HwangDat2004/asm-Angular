import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../../services/products.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { Category } from '../../../../../types/category';
import { CategoryService } from '../../../../services/category.service';

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
    image: new FormControl(''),
    price: new FormControl(0),
    description: new FormControl(''),
    category: new FormControl(''),
    isShow: new FormControl(true),
    startAt: new FormControl(''),
    bidTime: new FormControl(''),
  });

  productService = inject(ProductService);
  router = inject(Router);
  toast = inject(HotToastService);
  categories: Category[] = [];
  categoryService = inject(CategoryService);

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: () => {
        this.toast.error('Error');
      },
    });
  }

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
