import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './course.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html'
})
export class CourseAddComponent {
  

  public course: Course = <Course>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  public saveCourse() {
    this.http.post(this.baseUrl + 'api/courses', this.course).subscribe(result => {
      this.router.navigateByUrl("/course");
    }, error => console.error(error))
  }
}

