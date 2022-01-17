import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product:Product = new Product()
    constructor(private http:HttpClient,private prodService:ProductService) { }
  
    ngOnInit(): void {
    }
    saveProduct(form: NgForm){
      this.prodService.saveProduct(this.product)
     .subscribe(data =>{
       console.log(data);
    })
     
    }
  
  }