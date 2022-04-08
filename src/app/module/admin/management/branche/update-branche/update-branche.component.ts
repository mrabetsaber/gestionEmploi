import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Branche } from 'src/app/orm/Branche';
import { BrancheService } from 'src/app/Service/admin/management/branche/branche.service';

@Component({
  selector: 'app-update-branche',
  templateUrl: './update-branche.component.html',
  styleUrls: ['./update-branche.component.css']
})
export class UpdateBrancheComponent implements OnInit {

  id!: number;
  branche!: Branche;
  branches!: Observable<Branche[]>;
  nameExist = false;
  prenom: String = '';
  faUserEdit = faUserEdit;
  updateForm = new FormGroup({
    'name': new FormControl(this.prenom, Validators.required,),
    
  });
  constructor(private route: ActivatedRoute,private router: Router,private bserv:BrancheService) { }

  ngOnInit(): void {

    this.reloadData();
    this.branche= new Branche();


    this.id = this.route.snapshot.params['id'];
    
    this.bserv.getBranche(this.id)
      .subscribe(data => {
        console.log(data)
        this.updateForm.setValue({ 'name': data.nom });
        this.branche.id = data.id;
      });
  }

  updateAdmin() {
    this.branche.nom = this.name.value;
    
    this.bserv.updateBranche(this.id, this.branche)
      .subscribe(data => {
        console.log(data);
        this.branche = new Branche();
      })
    this.router.navigate(['admin/brancheList'])
  }

  onSubmit() {
    this.updateAdmin();    
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
