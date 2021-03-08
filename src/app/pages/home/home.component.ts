import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any = [];
  loading = false
  constructor(private productsService: ProductsService) {

  }

  ngOnInit() {
    this.loading = true
    this.productsService.getProducts()
      .subscribe(data => {
        console.log(data)
        this.products = data
        this.loading = false
      },
        error => { console.log(error) })
  }

}
