import { Component, OnInit } from '@angular/core';
import { Turma } from '../turma';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  editable:boolean = false;

  turma:Turma = {
    name: "TPSI 10.18",
    description: "Uma turma",
    start_date: new Date(2018,10,22),
  };

  enableEdit() {
    this.editable = !this.editable;
  }

  constructor() {

  }

  ngOnInit() {
  }

}