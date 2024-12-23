import { NgStyle, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../Models/Product';

@Component({
  selector: 'app-product',
  imports: [NgStyle, CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  product: Product;
}
