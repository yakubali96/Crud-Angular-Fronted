import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShowComponent } from './product/show/show.component';
import { LoginComponent } from './login/login.component';
import { ProductService } from './service/product.service';
import { EditComponent } from './product/edit/edit.component';
import { CreateComponent } from './product/create/create.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
         ShowComponent,
         LoginComponent,
         EditComponent,
         CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
