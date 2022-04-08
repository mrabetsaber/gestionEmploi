import { TeacherService } from 'src/app/Service/Teacher/teacher.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/orm/User';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  constructor(private tserv: TeacherService,private router: Router) { }
  teachers!: Observable<User[]>;

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.teachers = this.tserv.getTeacherList();
  }
  deleteTeacher(id: number) {
    console.log(id);
    
    this.tserv.deleteTeacher(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        });
  }

  updateTeacher(id: number){
    this.router.navigate(['/updateTeacher', id]);
    
    
  }
}
