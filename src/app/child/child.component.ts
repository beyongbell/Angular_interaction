import { Component, ViewChild, AfterViewInit  } from '@angular/core';
import { ThreeComponent } from './three/three.component';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements AfterViewInit   {

  userLoggedIn = true;

  constructor(private _interactionService: InteractionService) {}

  @ViewChild(ThreeComponent, { static: true }) ThreeComponentRef: ThreeComponent;

  ngAfterViewInit() {
    console.log(this.ThreeComponentRef.name)
  }

  greet(name:string) {
    alert("Hello"+name)
  }

  greetStudent() {
    this._interactionService.sendMessage("Good Morning");
  }

  appreciateStudent() {
    this._interactionService.sendMessage("Well Done");
  }


}
