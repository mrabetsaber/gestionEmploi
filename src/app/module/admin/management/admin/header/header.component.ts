import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'adminManagement-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService,private route:Router) {}
  ngOnInit(): void {}
  logout(): void {
    this.auth.logout();
  }

  home() {
    
    this.route.navigate(['admin']);
  }
}
