import { Component, OnInit } from '@angular/core';
import { products } from '../../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  Products = products;

  constructor() { }

  ngOnInit(): void {
  }

}
