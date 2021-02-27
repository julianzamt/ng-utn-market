import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any = [];
  constructor(private productsService: ProductsService) {
    this.productsService.getProducts()
      .subscribe(data => {
        console.log(data)
        this.products = data
      },
        error => { console.log(error) })
  }

  ngOnInit(): void {
  }

}
