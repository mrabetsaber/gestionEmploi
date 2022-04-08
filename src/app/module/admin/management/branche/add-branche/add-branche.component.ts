import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Branche } from 'src/app/orm/Branche';
import { BrancheService } from 'src/app/Service/admin/management/branche/branche.service';

@Component({
  selector: 'app-add-branche',
  templateUrl: './add-branche.component.html',
  styleUrls: ['./add-branche.component.css']
})
export class AddBrancheComponent implements OnInit {

  id!: number;
  branche!: Branche;
  branches!: Observable<Branche[]>;
  
  nameExist = false;
  prenom: String = '';
  faUserEdit = faUserPlus;
  updateForm = new FormGroup({
    'name': new FormControl( null,Validators.required),
  
    
  });
  constructor(private router: Router,private bserv:BrancheService) { }

  ngOnInit(): void {

    this.reloadData();
    
  }

  addbranche() {
    this.branche.nom = this.name.value;
        
    this.bserv.createBranche(this.branche)
      .subscribe(data => {
        console.log(data);
        this.branche = new Branche();
      })
    this.router.navigate(['admin/brancheList'])
  }

  onSubmit() {
    this.addbranche();    
  }

  nameCheck(): void{
    this.nameExist = false;
    this.branches.forEach(user => {
      user.map(user => {
        if (user.nom == this.name.value) {
          this.nameExist = true;
          
        }
        
      })
    });
    
  }

  reloadData() {
    
    this.branches = this.bserv.getBrancheList();
    
  }

  get name() {
    return this.updateForm.get('name')!;
  }
 
 


}
