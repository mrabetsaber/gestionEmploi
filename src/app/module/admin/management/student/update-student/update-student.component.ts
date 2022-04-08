import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { User } from 'src/app/orm/User';
import { AdminService } from 'src/app/Service/admin/admin.service';
import { StudentService } from 'src/app/Service/Student/student.service';
import { TeacherService } from 'src/app/Service/Teacher/teacher.service';
import { UserService } from 'src/app/Service/User/user.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id!: number;
  admin!: User;
  users!: Observable<User[]>;
  admins!: Observable<User[]>;
  teachers!: Observable<User[]>;
  students!: Observable<User[]>;
  emailExist = false;
  prenom: String = '';
  faUserEdit = faUserEdit;
  updateForm = new FormGroup({
    'firstName': new FormControl(this.prenom, Validators.required,),
    'lastName':new FormControl(null, Validators.required),
    'email': new FormControl(null,[Validators.required, Validators.email]),
    
  });
  constructor(private route: ActivatedRoute,private userser: UserService,private tserv:TeacherService,private router: Router,private aserv: AdminService,private sserv:StudentService) { }

  ngOnInit(): void {

    this.reloadData();
    this.admin = new User();


    this.id = this.route.snapshot.params['id'];
    
    this.sserv.getStudent(this.id)
      .subscribe(data => {
        console.log(data)
        this.updateForm.setValue({ 'firstName': data.prenom, 'lastName': data.nom, 'email': data.email });
        this.admin.id = data.id;
        this.admin.password = data.password;
      });
  }

  updateAdmin() {
    this.admin.email = this.email.value;
    this.admin.nom = this.lastName.value;
    this.admin.prenom = this.firstName.value;
    this.sserv.updateStudent(this.id, this.admin)
      .subscribe(data => {
        console.log(data);
        this.admin = new User();
      })
    this.router.navigate(['admin/studentList'])
  }

  onSubmit() {
    this.updateAdmin();    
  }

  emailCheck(): void{
    this.emailExist = false;
    this.users.forEach(user => {
      user.map(user => {
        if (user.email == this.email.value) {
          this.emailExist = true;
          
        }
        
      })
    });
    this.students.forEach(user => {
      user.map(user => {
        if (user.email == this.email.value) {
          this.emailExist = true;
          
        }
        
      })
    });
    this.teachers.forEach(user => {
      user.map(user => {
        if (user.email == this.email.value) {
          this.emailExist = true;
          
        }
        
      })
    });
    this.admins.forEach(user => {
      user.map(user => {
        if (user.email == this.email.value) {
          this.emailExist = true;
          
        }
        
      })
    });
    
  }

  reloadData() {
    this.users = this.userser.getUserList();
    this.admins = this.aserv.getAdminList();
    this.teachers = this.tserv.getTeacherList();
    this.students = this.sserv.getStudentList();
   
    
  }

  get firstName() {
    return this.updateForm.get('firstName')!;
  }
  get lastName() {
    return this.updateForm.get('lastName')!;
  }
  get email() {
    return this.updateForm.get('email')!;
  }


}
