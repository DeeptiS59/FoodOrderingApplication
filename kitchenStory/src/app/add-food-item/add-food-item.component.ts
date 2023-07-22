import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-add-food-item',
  templateUrl: './add-food-item.component.html',
  styleUrls: ['./add-food-item.component.css']
})
export class AddFoodItemComponent {
foodItem:any={};
constructor(private adminService: AdminService) { }
onSubmit()
{
  
  this.adminService.saveFoodItems(this.foodItem).subscribe((res: any[]) => {
     alert("done")
  });
}

}
