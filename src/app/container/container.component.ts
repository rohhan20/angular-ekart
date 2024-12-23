import { Component } from '@angular/core';
import { SearchComponent } from "./search/search.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

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
}
