import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'TPSIP1018';
}

export class ClassComponent {
  name = 'Teste'
  number_students = 17
  date_start = 'Test';
}
