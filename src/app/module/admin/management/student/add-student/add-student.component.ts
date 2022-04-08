import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { User } from 'src/app/orm/User';
import { AdminService } from 'src/app/Service/admin/admin.service';
import { StudentService } from 'src/app/Service/Student/student.service';
import { TeacherService } from 'src/app/Service/Teacher/teacher.service';
import { UserService } from 'src/app/Service/User/user.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  emailExist=false;
  faUserPlus = faUserPlus;
  
  registerForm = new FormGroup({
    'firstName': new FormControl(null, Validators.required),
    'lastName':new FormControl(null, Validators.required),
    'email': new FormControl(null,[Validators.required, Validators.email]),
    'password': new FormControl(null, Validators.required),
    'Rpassword': new FormControl(null, Validators.required),
  });
  user: User = new User();
  users!: Observable<User[]>;
  admins!: Observable<User[]>;
  teachers!: Observable<User[]>;
  students!: Observable<User[]>;
  constructor(private userser: UserService,private tserv:TeacherService,private aserv:AdminService,private sserv:StudentService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
   
  }

  reloadData() {
    this.users = this.userser.getUserList();
    this.admins = this.aserv.getAdminList();
    this.teachers = this.tserv.getTeacherList();
    this.students = this.sserv.getStudentList();
   
    
  }
  save() {
    this.user.email = this.email.value;
    this.user.prenom = this.firstName.value;
    this.user.nom = this.lastName.value;
    this.user.password = this.password.value;
    this.sserv
      .createStudent(this.user).subscribe(data => {
        console.log(data)
      
      
      })
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
  onSubmit(): void {

    
    
   this.save();
    
    this.registerForm.reset();
    alert('You submitted successfully!');
    this.router.navigate(["/admin/studentList"]);
    
  }
  
  get firstName() {
    return this.registerForm.get('firstName')!;
  }
  get lastName() {
    return this.registerForm.get('lastName')!;
  }
  get email() {
    return this.registerForm.get('email')!;
  }
  get password() {
    return this.registerForm.get('password')!;
  }
  get Rpassword() {
    return this.registerForm.get('Rpassword')!;
  }
 

}
