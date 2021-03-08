import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  product: any
  compra = [""]
  buttonComprarText = "Comprar"
  loading = false
  constructor(private productsSrv: ProductsService,
    private activatedRoute: ActivatedRoute) { }
  comprar() {
    this.compra = ["compra"]
    setTimeout(() => {
      this.buttonComprarText = "¡Gracias por su compra!"
    }, 500);
  }
  async ngOnInit() {
    try {
      this.loading = true
      const id = this.activatedRoute.snapshot.paramMap.get("id")
      this.product = await this.productsSrv.getProduct(id)
      this.loading = false
    }
    catch (e) {
      console.group(e)
    }
  }
}