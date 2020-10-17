import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/shared/models/form.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  obj: Form = <Form>{};
  // obj = {};
  constructor() {}

  ngOnInit(): void {}

  getNewObj(objValue) {
    if (objValue) {
      console.log(objValue);
      let x = JSON.parse(JSON.stringify(objValue))
      this.obj = JSON.parse(x);
      console.log(x);
      console.log(this.obj);
      debugger;
    }
  }
}
