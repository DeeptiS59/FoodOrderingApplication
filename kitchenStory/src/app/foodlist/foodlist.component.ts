import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {
  foodlist: any;

  constructor(private adminService: AdminService) { }
  ngOnInit(): void {
    this.adminService.getFoodItems().subscribe((res: any[]) => {
      this.foodlist = res;
    });
  }
  deleteFoodItem(id:number) {
   this.adminService.deleteFoodItems(id).subscribe((res: any[]) => {
    this.adminService.getFoodItems().subscribe((res: any[]) => {
      this.foodlist = res;
    });
  });
  }
}
