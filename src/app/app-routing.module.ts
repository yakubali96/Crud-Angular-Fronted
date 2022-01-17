import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

import { ShowComponent } from './product/show/show.component';
import { EditComponent } from './product/edit/edit.component';
import { CreateComponent } from './product/create/create.component';

const routes: Routes = [


    {path:'product',component: ProductComponent,children:[
      {path:'',component: ShowComponent},  
      {path:'create',component: CreateComponent},  

      {path:'show',component: ShowComponent},  

      {path:'edit',component: EditComponent},

    ]},
    {path:'login',component: LoginComponent},

    {path:'',redirectTo: "/login",pathMatch:'full'},
  
  
  
  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }