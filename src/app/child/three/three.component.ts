import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnChanges {

  message: string;
  name = 'Tinnakorn';

  @Input() loggedIn: boolean;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    // const loggedInValue = changes['loggedIn'];
    // if (loggedInValue.currentValue === true) {
    //   this.message = 'Welcome back asd!!';
    // } else {
    //   this.message = 'Please log in';
    // }
  }

  greetVishwas() {
    alert('Hey Vishwas!');
  }

}
