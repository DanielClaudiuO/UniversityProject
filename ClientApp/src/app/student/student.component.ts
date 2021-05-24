import { Component, Inject } from '@angular/core';
import { Student } from './student.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['courseStyle.css']
})
export class StudentComponent {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age', 'average', 'faculty', 'actions'];
  dataSource: MatTableDataSource<Student>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private studentService: StudentService) {
    this.loadStudent();
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public deleteStudent(student: Student) {
    this.studentService.deleteStudent(student).subscribe(result => {
      this.loadStudent();
    }, error => console.error(error))
  }

  loadStudent() {
    this.studentService.loadStudent().subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, error => console.error(error));
  }
}
