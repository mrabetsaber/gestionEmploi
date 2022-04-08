import { User } from 'src/app/orm/User';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/Service/User/user.service';
import { AuthUser } from 'src/app/orm/authUser';
import { TeacherService } from 'src/app/Service/Teacher/teacher.service';
import { AdminService } from 'src/app/Service/admin/admin.service';
import { StudentService } from 'src/app/Service/Student/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private userser: UserService,private tserv:TeacherService,private aserv:AdminService,private sserv:StudentService, private router: Router) {}



  users!: Observable<AuthUser[]>;
  user: User = new User();

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.users = this.userser.getUserList();
  }
  deleteUser(id: number) {
    console.log(id);
    
    this.userser.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        });
  }
  accept(authuser: AuthUser) {
    this.user.email = authuser.email;
    this.user.nom = authuser.nom;
    this.user.prenom = authuser.prenom;
    this.user.password = authuser.password;
    
    switch (authuser.role) {
      case "Admin":
        this.aserv.createAdmin(this.user).subscribe(data => {
          console.log(data);
          
        });
        break;
      case "Teacher":
        this.tserv.createTeacher(this.user).subscribe(data=>{
          console.log(data);
          
        });
        break;
      case "Student":
        this.sserv.createStudent(this.user).subscribe(data => {
          
          console.log(data);
        });
        
    }
    this.deleteUser(authuser.id);


  }
}
