import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../services/products.service';
import { BidService } from '../../../../services/bid.service';
import { Product } from '../../../../../types/product';

@Component({
  selector: 'app-bids',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './bids.component.html',
  styleUrl: './bids.component.css'
})
export class BidsComponent {
    route = inject(ActivatedRoute)
    productService = inject(ProductService)
    bidService = inject(BidService)

    product! : Product;

    ProductId! : string;
}
