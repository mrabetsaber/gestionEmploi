import { MatiereService } from './../../../../../Service/admin/management/matiere/matiere.service';
import { Matiere } from './../../../../../orm/Matiere';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matiere-list',
  templateUrl: './matiere-list.component.html',
  styleUrls: ['./matiere-list.component.css']
})
export class MatiereListComponent implements OnInit {
  constructor(private mserv: MatiereService,private router: Router) { }

  matieres!: Observable<Matiere[]>;

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.matieres = this.mserv.getMatiereList();
  }
  deleteMatiere(id: number) {
    console.log(id);
    
    this.mserv.deleteMatiere(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        });
  }

  updateMatiere(id: number){
    this.router.navigate(['/updateMatiere', id]);
    
    
  }

}
