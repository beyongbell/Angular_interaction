import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  @Input() loggedIn: boolean;
  @Input('loggedIn') logged : boolean;

  private _logged_In : boolean;
  message:string;

  get logged_In() : boolean {
    return this._logged_In;
  }

  @Input()

  set logged_In(value: boolean) {
    this._logged_In = value;
    if(value == true) {
      this.message = 'Welcome back Tinnakorn'
    } else {
      this.message = 'Please log in'
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
