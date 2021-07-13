import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { groupBy } from 'src/app/core/utils/group-by';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnChanges {

  @Input() products = [];

  productsByType: any = {};
  tags: string[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.products && changes.products.currentValue !== changes.products.previousValue) {
      const _products: any[] = changes.products.currentValue;
      this.productsByType = groupBy(_products, 'type');
      this.tags = Object.keys(this.productsByType);
    }
  }

}
