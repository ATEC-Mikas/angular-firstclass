import { Component, OnInit } from '@angular/core';
import { Turma } from '../turma';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  // name:string;
  // number_students:number;
  // date_start:Date;

  // constructor(name:string, number_students:number, date_start:Date) {
  //   this.name = name;
  //   this.number_students = number_students;
  //   this.date_start = date_start;
  // }

  turma:Turma = {
    name: "TPSI 10.18",
    description: "Uma turma",
    start_date: new Date(2018,10,22),
  };

  constructor() {

  }

  ngOnInit() {
  }

}