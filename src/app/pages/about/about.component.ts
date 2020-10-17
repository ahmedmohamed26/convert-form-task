import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  textAreaString: string;
  formObject : any =  {};

  constructor() { }

  ngOnInit(): void {
  }


  getNewObj(objValue) {
    console.log(objValue)
    eval('this.formObject =' + objValue);
    console.log(this.formObject)
    debugger;
  }

}
