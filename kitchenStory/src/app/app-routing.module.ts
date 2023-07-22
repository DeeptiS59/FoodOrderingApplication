import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { AddFoodItemComponent } from './add-food-item/add-food-item.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

const routes: Routes = [
  { path:"admin",component:AdminComponent},
  { path:"foodlist",component:FoodlistComponent},
  { path:"addFoodItem",component:AddFoodItemComponent},
  { path:"homepage",component:UserHomePageComponent},
  { path:"cart",component:CartComponent},
  { path:"register",component:RegisterComponent},
  { path:"login",component:LoginComponent},
  { path:"logout",component:LogoutComponent},
  { path:"resetpwd",component:ResetpwdComponent},
  { path:"payment",component:PaymentComponent},
  {path:"orderSuccess",component:OrderSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
