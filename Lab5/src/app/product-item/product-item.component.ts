import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit{
  product: Product | undefined;
  ngOnInit(): void {
    
  }
}
