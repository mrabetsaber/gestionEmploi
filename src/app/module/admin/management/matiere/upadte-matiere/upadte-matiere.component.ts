import { Matiere } from './../../../../../orm/Matiere';
import { MatiereService } from './../../../../../Service/admin/management/matiere/matiere.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upadte-matiere',
  templateUrl: './upadte-matiere.component.html',
  styleUrls: ['./upadte-matiere.component.css']
})
export class UpadteMatiereComponent implements OnInit {

  id!: number;
  matiere!: Matiere;
  matieres!: Observable<Matiere[]>;
  types=['TP','Cour']
  nameExist = false;
  prenom: String = '';
  faUserEdit = faUserEdit;
  updateForm = new FormGroup({
    'name': new FormControl(this.prenom, Validators.required,),
    'type': new FormControl('Tp'),
    
  });
  constructor(private route: ActivatedRoute,private router: Router,private mserv:MatiereService) { }

  ngOnInit(): void {

    this.reloadData();
    this.matiere= new Matiere();


    this.id = this.route.snapshot.params['id'];
    
    this.mserv.getMatiere(this.id)
      .subscribe(data => {
        console.log(data)
        this.updateForm.setValue({ 'name': data.name, 'type': data.type });
        this.matiere.id = data.id;
      });
  }

  updateAdmin() {
    this.matiere.name = this.name.value;
    this.matiere.type = this.type.value;
    
    this.mserv.updateMatiere(this.id, this.matiere)
      .subscribe(data => {
        console.log(data);
        this.matiere = new Matiere();
      })
    this.router.navigate(['admin/matiereList'])
  }

  onSubmit() {
    this.updateAdmin();    
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
