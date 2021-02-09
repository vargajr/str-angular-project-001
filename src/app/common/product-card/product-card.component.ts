import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product = new Product;

  origin: string = this.product.catId === 1 ? '1: hazai' : '2: import';

  constructor() { }

  ngOnInit(): void {
  }

}
