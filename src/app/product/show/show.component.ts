import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private http:HttpClient,private prodService:ProductService) { }
  products:any;
  product:any=null;

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.prodService.getProducts().subscribe(products=>{
      console.log(products);
     this.products = products;
    })
  }
  edit(product: any){
    this.product=product;
    console.log(product);
    
  }
  deleteById(id: any){
   this.prodService.deleteById(id)
   .subscribe(res=>{
     this.getProducts();
   })
    
  }


}