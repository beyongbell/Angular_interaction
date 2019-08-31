import { Component, ViewChild, AfterViewInit  } from '@angular/core';
import { ThreeComponent } from './three/three.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements AfterViewInit   {

  userLoggedIn = true;

  @ViewChild(ThreeComponent, { static: true }) ThreeComponentRef: ThreeComponent;

  ngAfterViewInit() {
    console.log(this.ThreeComponentRef.name)
  }
}
