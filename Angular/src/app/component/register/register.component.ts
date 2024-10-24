import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IRole } from '../../model/interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerObj: any = {
      username: '',
      password: '',
      email: '',
      role: ''
  };

  roles: any[] = [];
  router = inject(Router);
  http = inject(HttpClient);

  authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.getAllRoles().subscribe((res:any)=>{
      this.roles = res.data;
      console.log(res.data)
    });
  }

  onRegister(){
    debugger;
    this.http.post("https://localhost:7250/api/User/register",this.registerObj).subscribe((res:any)=>{
      if(res.success){
        alert("Register successfull")
        this.router.navigateByUrl("/login");
      } else {
        alert("API error")
      }
    })
  }

  

}
