import { AuthService } from 'src/app/Service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'matiere-header',
  templateUrl: './matiereheader.component.html',
  styleUrls: ['./matiereheader.component.css']
})
export class MatiereheaderComponent implements OnInit {
  constructor(private auth: AuthService,private route: Router) { }


  ngOnInit(): void {}
  logout(): void {
    this.auth.logout();
  }

  home() {
    
    this.route.navigate(['admin']);
  }


}
