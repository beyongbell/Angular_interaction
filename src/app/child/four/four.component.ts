import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {

  @Output() greetEvent = new EventEmitter();
  name = "Tinnakorn"
  constructor() { }

  ngOnInit() {
  }

  callParentGreet() {
    this.greetEvent.emit(this.name);
  }

}
