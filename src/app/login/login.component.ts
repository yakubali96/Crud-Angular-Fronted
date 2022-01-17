import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { LoginResponseModel } from './login_response.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:String='';
password:String='';

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  login(form:NgForm){
    var body ={"username":this.username,"password":this.password};
    this.http.post<LoginResponseModel>("http://localhost:8081/login",body).subscribe(model => {
  
      this.router.navigate(['/location']);
    });
 
     

    
    
  }

}
