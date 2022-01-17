import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  headers:any

  constructor(private http:HttpClient) { 
   this.headers = {'content-type': 'application/json'}

       }
     
      saveProduct(product: any):Observable<any>{
       let strProduct =JSON.stringify(product);
        return this.http.post<any>("http://localhost:8081/api/add_product",strProduct,{"headers":this.headers})
       
       
      }

      updateProduct(product: any):Observable<any>{
        let strProduct =JSON.stringify(product);
         return this.http.post<any>("http://localhost:8081/update_product",strProduct,{"headers":this.headers})
        
        
       }

      getProducts():Observable<any>{
        const headers = {'content-type': 'application/json'}
        return this.http.get<any>("http://localhost:8081/show_products",{headers});
    
       
        }

        getProductById(id:number):Observable<any>{
          const headers = {'content-type': 'application/json'}
          return this.http.get<any>("http://localhost:8081/getproductById?product_id="+id,{headers});
      
         
          }
         deleteById(id:number):Observable<any>{
            const headers = {'content-type': 'application/json'}
            return this.http.get<any>("http://localhost:8081/delete_product_by_id?product_id="+id,{headers});
        
           
            }
      }
   
      
      
      
  

