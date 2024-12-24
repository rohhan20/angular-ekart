import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from "./search/search.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { Product } from '../Models/Product';

@Component({
  selector: 'app-container',
  imports: [SearchComponent, ProductListComponent, ProductDetailComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  searchText: string = '';

  onSearch(text: string){
    console.log("searching for" + text);
    this.searchText = text;
  }

  @ViewChild(ProductListComponent, {static: true}) productListComponent: ProductListComponent;
}
