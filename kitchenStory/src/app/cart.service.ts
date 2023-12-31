import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public HttpClient: HttpClient) { }
  public  getAllCartItems(userId:String):any{
    let url = "http://localhost:8080/cart/"+userId;  
    return this.HttpClient.get(url)
  }
  public addCartItem(userId:String,foodItemId:any ):any{
    let url = "http://localhost:8080/addToCart/"+userId +"/"+foodItemId;  
    return this.HttpClient.post(url,foodItemId)
  } 
  public deleteCartItem(id:number):any{
    let url = "http://localhost:8080/cart/"+id;  
    return this.HttpClient.delete(url)
  }
  public emptyCartItems(userId:String):any{
    let url = "http://localhost:8080/emptyCart/"+userId;  
    return this.HttpClient.get(url)
  }  
}
