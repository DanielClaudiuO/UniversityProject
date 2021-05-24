import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './course.models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html'
})
export class CourseEditComponent implements OnInit {

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  public course: Course = <Course>{};
  public id: String;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params.id,
        this.loadCourse();
    })
  }

  public loadCourse() {
    this.http.get<Course>(this.baseUrl + 'api/courses/' + this.id).subscribe(result => {
      this.course = result;
    }, error => console.error(error))

  }
  public editCourse() {
    this.http.put<Course>(this.baseUrl + 'api/courses/' + this.id, this.course).subscribe(result => {
      this.router.navigateByUrl("/course");
    }, error => console.error(error))

  }

}
