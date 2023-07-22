import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AdminService {

   constructor(public HttpClient: HttpClient) { }
  public getFoodItems():any{
    let url = "http://localhost:8080/foodItems";
    return this.HttpClient.get(url);
  }
  public saveFoodItems(foodItem:any):any{
    let url = "http://localhost:8080/foodItems";  
    return this.HttpClient.post(url,foodItem)
  }
  public deleteFoodItems(id:number):any{
    let url = "http://localhost:8080/foodItems/"+id;  
    return this.HttpClient.delete(url)
  }

}
