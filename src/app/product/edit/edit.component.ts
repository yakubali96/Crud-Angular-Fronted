import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
product:any;

  constructor(private http:HttpClient,private prodService:ProductService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
this.route.queryParams.subscribe(params =>{
  console.log(params['id']);
  
    this.prodService.getProductById(params['id'])
    .subscribe(res=>{
this.product = res.data.product;      
  
  })
}); 
    
  }
  updateProduct(form: NgForm){
    this.prodService.updateProduct(this.product)
   .subscribe(data =>{
    this.router.navigate(['/product/show'])
    console.log(data);
  })
   
  }

}