import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList : any;
 

  constructor(private api: ApiserviceService, private cartservice:CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.productList.forEach((a:any) =>{
        Object.assign(a,{quantity:1,total:a.price});
      })

     
    })
  }

 

  addtocart(item: any){
    this.cartservice.addtoCart(item)
  }

}


