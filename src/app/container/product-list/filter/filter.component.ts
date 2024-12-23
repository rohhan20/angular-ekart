import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input()
  all: number;

  @Input()
  inStock: number;

  @Input()
  outOfStock: number;

  selectedFilterRadioButton: string = 'all';
 
  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  onSelectionChange(){
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }
}
