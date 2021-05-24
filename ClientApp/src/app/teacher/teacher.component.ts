import { Component, Inject, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher } from './teacher.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['courseStyle.css']
})
export class TeacherComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'course', 'email', 'yearsActive', 'actions'];
  dataSource: MatTableDataSource<Teacher>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadTeacher();
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public deleteStudent(teacher: Teacher) {
    this.http.delete(this.baseUrl + 'api/teachers/' + teacher.id).subscribe(result => {
      this.loadTeacher();
    }, error => console.error(error))
  }

  loadTeacher() {
    this.http.get<Teacher[]>(this.baseUrl + 'api/teachers').subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => console.error(error));
  }
}
