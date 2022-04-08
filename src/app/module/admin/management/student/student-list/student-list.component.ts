import { StudentService } from 'src/app/Service/Student/student.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/orm/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private sserv: StudentService,private router: Router) { }
  students!: Observable<User[]>;

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.students = this.sserv.getStudentList();
  }
  deleteStudent(id: number) {
    console.log(id);
    
    this.sserv.deleteStudent(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        });
  }

  updateStudent(id: number){
    this.router.navigate(['/updateStudent', id]);
    
    
  }

}
