import { NgStyle, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../Models/Product';
import { HighlightDirective } from '../../../CustomDirectives/highlight.directive';

@Component({
  selector: 'app-product',
  imports: [NgStyle, CurrencyPipe, HighlightDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  product: Product;
}
