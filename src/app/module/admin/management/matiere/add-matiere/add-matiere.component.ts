import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Matiere } from 'src/app/orm/Matiere';
import { MatiereService } from 'src/app/Service/admin/management/matiere/matiere.service';

@Component({
  selector: 'app-add-matiere',
  templateUrl: './add-matiere.component.html',
  styleUrls: ['./add-matiere.component.css']
})
export class AddMatiereComponent implements OnInit {

  id!: number;
  matiere!: Matiere;
  matieres!: Observable<Matiere[]>;
  types=['TP','Cour']
  nameExist = false;
  prenom: String = '';
  faUserEdit = faUserPlus;
  updateForm = new FormGroup({
    'name': new FormControl(this.prenom, Validators.required,),
    'type': new FormControl('TP'),
    
  });
  constructor(private router: Router,private mserv:MatiereService) { }

  ngOnInit(): void {

    this.reloadData();
    
  }

  addMatiere() {
    this.matiere.name = this.name.value;
    this.matiere.type = this.type.value;
    
    this.mserv.createMatiere(this.matiere)
      .subscribe(data => {
        console.log(data);
        this.matiere = new Matiere();
      })
    this.router.navigate(['admin/matiereList'])
  }

  onSubmit() {
    this.addMatiere();    
  }

  nameCheck(): void{
    this.nameExist = false;
    this.matieres.forEach(user => {
      user.map(user => {
        if (user.name == this.name.value) {
          this.nameExist = true;
          
        }
        
      })
    });
    
  }

  reloadData() {
    
    this.matieres = this.mserv.getMatiereList();
    
  }

  get name() {
    return this.updateForm.get('name')!;
  }
  get type() {
    return this.updateForm.get('type')!;
  }
 

}
