import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student.models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html'
})
export class StudentEditComponent implements OnInit {

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  public student: Student = <Student>{};
  public id: String;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id,
        this.loadStudent();
    })
  }

  public loadStudent() {
    this.http.get<Student>(this.baseUrl + 'api/students/' + this.id).subscribe(result => {
      this.student = result;
    }, error => console.error(error))

  }
  public editStudent() {
    this.http.put<Student>(this.baseUrl + 'api/students/' + this.id, this.student).subscribe(result => {
      this.router.navigateByUrl("/student");
    }, error => console.error(error))

  }

}
