import { Component,OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {
  foodlist: any[]=[];
  displayedFoodlist:any[]=[];

  constructor(private adminService: AdminService,private cartService: CartService, private router: Router) { }
  ngOnInit(): void {
    let x:String=localStorage.getItem("userId")||"";
    if(x=="") {
      this.router.navigate(['/', 'login']);
    }
    this.adminService.getFoodItems().subscribe((res: any[]) => {
      this.foodlist = res;
      this.displayedFoodlist=res;
    });
  }
  addToCart(foodItemId:String) {
   let x:String=localStorage.getItem("userId")||""
   this.cartService.addCartItem(x,foodItemId).subscribe((res: any[]) => {
    alert("done")
 });
  }
  onSearch(event:any){
    let searchTerm=event?.target?.value;
    this.displayedFoodlist=this.foodlist.filter(item=>item.name.toLowerCase().indexOf(searchTerm.toLowerCase())>-1)
  }
  
}

