import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/shared/models/form.model';
import { NgForm } from '@angular/forms';

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
  onSubmit(serviceForm: NgForm) {
    console.log(this.obj)
    console.log(serviceForm.value);

      // console.log(JSON.stringify(serviceForm));
  }
}
// let x = JSON.stringify(this.DataForm.value)
