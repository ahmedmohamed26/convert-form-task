import { AboutComponent } from './../about/about.component';
import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/shared/models/form.model';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // obj: Form = <Form>{};
  obj = {
    inputs: [],
  };
  formInfo: FormGroup;
  userInfo: any = {};
  showUserInfo: boolean = false;
  showDetails: any = {};
  constructor() {}

  ngOnInit(): void {
    this.getDynamicFormControlNames();
  }

  // get FormControlNames
  getDynamicFormControlNames() {
    for (let config of this.obj.inputs) {
      this.userInfo[config.name] = new FormControl(config.value || '');
    }
    this.formInfo = new FormGroup(this.userInfo);
  }

  // get form
  getNewObj(objValue) {
    if (objValue) {
      eval('this.obj =' + objValue);
      this.getDynamicFormControlNames();
    } else {
      this.obj = {
        inputs: [],
      };
    }
  }

  onSubmit() {
    this.showDetails = this.formInfo.value;
    this.showUserInfo = true;
  }

  clearForm() {
    this.formInfo.reset();
    this.showDetails = {};
    this.showUserInfo = false;
  }
}
