import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnChanges {

  @Input() loggedIn: boolean;
  message:string;
  name = "Tinnakorn Choompee"
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    const loggedInValue = changes['loggedIn'];
    if(loggedInValue.currentValue === true) {
      this.message = "Welcome back Tinnakorn"
    } else {
      this.message = "Please Log In Two"
    }
  }

  constructor() { }

  greetTinnakorn() {
    alert("Hey Tinnakorn")
  }
}
