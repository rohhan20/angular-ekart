import { NgClass } from '@angular/common';
import { Component, Output, EventEmitter} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({ 
  selector: 'app-search',
  imports: [FormsModule, NgClass],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = "Mens wear"

  @Output()
  searchChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearch(inputElement: HTMLInputElement){
    this.searchChanged.emit(inputElement.value);
  }
}
