import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';
import { CurrencyPipe, NgStyle } from '@angular/common';

@Component({
  selector: 'product-detail',
  imports: [CurrencyPipe, NgStyle],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() productListComp: ProductListComponent = undefined;
  product: Product;

  ngOnInit(){
    this.product= this.productListComp.selectedProduct
  }
}
