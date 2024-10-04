import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '../../../../../types/category';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-list-category',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-category.component.html',
  styleUrl: './list-category.component.css'
})
export class ListCategoryComponent {
    categories: Category[] = [];
    categoryService = inject(CategoryService);


    ngOnInit(){
      this.categoryService
        .getAllCategories().subscribe({
        next: (categories) => {
          this.categories = categories;
        },
        error: (error) => {
          console.error(error.message);
        },
      });
    }

    handleDeleteCategory(id: string) {
      if (window.confirm('Are you sure you want to delete this category?')) {
        this.categoryService.deleteCategory(id).subscribe({
          next: () => {
            this.categories = this.categories.filter((category) => category._id !== id);
          },
          error: (error) => {
            console.error(error.message);
          },
        });
      }
    }
          
}
