import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student.models';
import { Router } from '@angular/router';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html'
})
export class StudentAddComponent {
  

  public student: Student = <Student>{};

  constructor(
    private studentService: StudentService,
    private router: Router) { }

  public saveStudent() {
    this.studentService.saveStudent(this.student).subscribe(result => {
      this.router.navigateByUrl("/student");
    }, error => console.error(error))
  }
}

