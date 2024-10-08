import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../../services/products.service';
import { HotToastService } from '@ngneat/hot-toast';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
    productId: string | null = null;
    editForm: FormGroup = new FormGroup({
      title: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl(''),
    });

    productService = inject(ProductService);
    toast = inject(HotToastService);
    router = inject(ActivatedRoute);
    route = inject(Router);

    ngOnInit(){
      this.router.params.subscribe((params: Params) => {
        this.productId = params['id'];
        this.productService.getProductDetail(params['id']).subscribe({
          next: (data) => {
            this.editForm.patchValue(data);
            this.toast.success('Get Product Detail');
          },
          error: (e) => {
            console.log(e);
            this.toast.error('Error');
          },
        });
      });
    }
    handleEditSubmit(){
      console.log(this.productId);
      if(!this.productId) return;
      this.productService.editProduct(this.productId, this.editForm.value).subscribe({
        next: () => {
          this.toast.success('Edit Product');
          this.route.navigate(['/admin/products/list']);
        },
        error: () => {
          this.toast.error('Error');
        },
      });
    }
}
