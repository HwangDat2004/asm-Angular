import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from '../../../../services/category.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
      addCategoryForm: FormGroup = new FormGroup({
          name : new FormControl(''),
      });

      categoryService = inject(CategoryService);
      router = inject(Router);
      toast = inject(HotToastService);

      handleaddCategorySubmit() {
        this.categoryService.createCategory(this.addCategoryForm.value).subscribe({
          next: () => {
            this.toast.success('Add Category');
            this.router.navigateByUrl('/admin/category/list');
          },  
          error: () => {
            this.toast.error('Error');
          }
        });
      }
    
}
