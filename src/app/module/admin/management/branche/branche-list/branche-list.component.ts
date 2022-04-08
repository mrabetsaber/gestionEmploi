import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Branche } from 'src/app/orm/Branche';
import { BrancheService } from 'src/app/Service/admin/management/branche/branche.service';

@Component({
  selector: 'app-branche-list',
  templateUrl: './branche-list.component.html',
  styleUrls: ['./branche-list.component.css']
})
export class BrancheListComponent implements OnInit {

  constructor(private bserv: BrancheService,private router: Router) { }

  branches!: Observable<Branche[]>;

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.branches = this.bserv.getBrancheList();
  }
  deleteBranche(id: number) {
    console.log(id);
    
    this.bserv.deleteBranche(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        });
  }

  updatebranche(id: number){
    this.router.navigate(['/updateBranche', id]);
    
    
  }
}
