import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  cartValue: number = 0;
  constructor(private cartService: CartService, private router: Router) { }
  ngOnInit(): void {
    let x: String = localStorage.getItem("userId") || "";
    this.cartService.getAllCartItems(x).subscribe((res: any[]) => {
      this.cartItems = res;
      this.computeCartValue();
    });
    console.log(x);
  }
  deleteCartItem(cartId: any) {
    this.cartService.deleteCartItem(cartId).subscribe((res: any[]) => {
      let x: String = localStorage.getItem("userId") || "";
      this.cartService.getAllCartItems(x).subscribe((res: any[]) => {
        this.cartItems = res;
        this.computeCartValue();
      });
    });
  }
  computeCartValue() {
    let sum = 0;
    for (var item of this.cartItems) {
      sum += item.foodItem.price;
    }
    this.cartValue = sum;
  }

}
