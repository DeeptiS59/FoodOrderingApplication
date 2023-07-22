import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { HttpClientModule } from '@angular/common/http';
import { AddFoodItemComponent } from './add-food-item/add-food-item.component';
import { FormsModule } from '@angular/forms';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    FoodlistComponent,
    AddFoodItemComponent,
    UserHomePageComponent,
    CartComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    ResetpwdComponent,
    OrdersComponent,
    PaymentComponent,
    OrderSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
