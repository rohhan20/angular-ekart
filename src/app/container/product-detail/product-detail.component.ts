import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';
import { CurrencyPipe, NgStyle } from '@angular/common';
import { setBackground } from '../../CustomDirectives/SetBackground.directive';
import { AppHoverDirective } from '../../CustomDirectives/app-hover.directive';

@Component({
  selector: 'product-detail',
  imports: [CurrencyPipe, NgStyle, setBackground, AppHoverDirective],
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
