import { AuthService } from './../../Service/auth.service';
import { UserService } from './../../Service/User/user.service';
import { User } from 'src/app/orm/User';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AdminService } from 'src/app/Service/admin/admin.service';
import { StudentService } from 'src/app/Service/Student/student.service';
import { TeacherService } from 'src/app/Service/Teacher/teacher.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id!: number;
  faLock = faLock;
  confirmed = false;
  user: User = new User();
  roles = ['Student', 'Admin',
            'Teacher'];
  loginForm = new FormGroup({
    'email': new FormControl(null,[Validators.required,Validators.email]),
    'password': new FormControl(null, Validators.required),
    'role': new FormControl('Student')
  });
  constructor(private auth :AuthService,private userser: UserService, private tserv:TeacherService,private aserv:AdminService,private sserv:StudentService,private router: Router) {}

  ngOnInit(): void {
    if (this.auth.isLoggedInAsAdmin()) {
      this.router.navigate(['admin']);
    }
  }
  
  
  
  
  get email() {
    return this.loginForm.get('email')!;
  }
  get password() {
    return this.loginForm.get('password')!;
  }
  get role() {
    return this.loginForm.get('role')!;
  }

  connect(): void{
    switch (this.role.value) {
      case "Student":
        this.sserv.login(this.user).subscribe(data => {
          
          
          console.log(data);
          if (data == null) {
            alert("Wrong Email or password");
          }
        }
        
        
        );
        break;
      case "Admin":
        this.aserv.login(this.user).subscribe(data => {
          
          console.log(data);
          if (data == null) {
            alert("Wrong Email or password");
          }
          else {
            this.auth.setloginUser(data.id);
            this.router.navigate(['/admin']);
          }
        });
        break;
      case "Teacher":
        this.tserv.login(this.user).subscribe(data => {
          console.log(data);
          
          if (data == null) {
            alert("Wrong Email or password");
          } else {
            this.router.navigate(['teacher'])
          }
        
        });
        break;
    }
  }
  onSubmit(): void {
    this.user.email = this.email.value;
    this.user.password = this.password.value;
    this.userser.login(this.user).subscribe(data => {
      if (data != null) {
        alert("wait until we check your profile");
      }
      else {
        this.connect();
      }
    })
    
  }
}
