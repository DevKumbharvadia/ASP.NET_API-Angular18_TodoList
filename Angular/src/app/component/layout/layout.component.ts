import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet, JsonPipe],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'] // Corrected typo: `styleUrls` should be an array
})

export class LayoutComponent implements OnInit {
  authServices = inject(AuthService);
  router = inject(Router);
  
  userRoles:any;

  ngOnInit(): void {
    console.log("**********layout****************") 
    this.authServices.getUserRoles()
    this.userRoles = sessionStorage.getItem("UserRoles");
    console.log("**********layout****************")

  }

  onLogOff() {
    // Call the logout method from AuthService
    this.authServices.logout(); // No need to pass userId, logout handles it internally
  }

  
}
