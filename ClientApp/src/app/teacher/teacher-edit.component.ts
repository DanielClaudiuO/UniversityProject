import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher } from './teacher.models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html'
})
export class TeacherEditComponent implements OnInit {

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  public teacher: Teacher = <Teacher>{};
  public id: String;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id,
        this.loadTeacher();
    })
  }

  public loadTeacher() {
    this.http.get<Teacher>(this.baseUrl + 'api/teachers/' + this.id).subscribe(result => {
      this.teacher = result;
    }, error => console.error(error))

  }
  public editTeacher() {
    this.http.put<Teacher>(this.baseUrl + 'api/teachers/' + this.id, this.teacher).subscribe(result => {
      this.router.navigateByUrl("/teacher");
    }, error => console.error(error))

  }

}
