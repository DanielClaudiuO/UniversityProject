import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Student } from './student.models';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  loadStudent() {
    return this.http.get<Student[]>(this.baseUrl + 'api/students');
  }

  public deleteStudent(student: Student) {
    return this.http.delete(this.baseUrl + 'api/students/' + student.id)
  }

  public saveStudent(student: Student) {
    return this.http.post(this.baseUrl + 'api/students', student)
  }

}
