import { Component, OnInit } from '@angular/core';
import { Aluno } from "../aluno";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  aluno:Aluno;

  constructor() { 
  }

  renderDetails(aluno:Aluno) {
    this.aluno = aluno;
  }

  ngOnInit() {
  }

}