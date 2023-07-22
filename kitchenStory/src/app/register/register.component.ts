import { Component } from '@angular/core';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user:any={};
  constructor(private loginService: LoginService) { }
  onSubmit() {
    this.loginService.registerUser(this.user).subscribe((res: any[]) => {
      alert("done")
   });
  }
}
