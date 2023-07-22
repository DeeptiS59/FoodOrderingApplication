import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.css']
})
export class ResetpwdComponent {
  constructor(private loginService: LoginService, private router: Router) { }
  resetpwd1:any={};
  resetpwd() {
    this.loginService.changePassword(this.resetpwd1).subscribe({
      error: (res:any) => {
        alert("Wrong  password");
      },
      next: (res:any) => {
        alert("Changed password");
        this.router.navigate(['/', 'admin']);
      },
    });

  }
}
