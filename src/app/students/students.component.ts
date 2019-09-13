import { Component, Input,OnInit } from '@angular/core';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { alunos } from "../alunos";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  alunos = alunos;

  @Input() details: StudentDetailsComponent; 
  constructor() { }

  ngOnInit() {
  }

}