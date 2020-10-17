import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/shared/models/form.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  obj: Form = <Form>{};
  constructor() {}

  ngOnInit(): void {}

  getNewObj(objValue) {
    console.log(this.obj);
    if (objValue) {
      eval('this.obj =' + objValue);
    }
  }




    // alert(this.obj)
  addForm() {
    // alert(this.obj.inputs.map(x => x.value))
    console.log(this.obj)
    }
}
