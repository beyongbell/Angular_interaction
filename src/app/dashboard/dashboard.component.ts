import { Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements AfterViewInit {

  imgUrl = "https://picsum.photos/200";
  count = 0;
  name:string;
  username:string;
  private customer:string;

  @ViewChild('nameRef', {static: false}) nameElementRef:ElementRef;

  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef)
  }

  get customerGet(): string {
    return this.customer
  }

  set customerSet(value: string) {
    this.customer = value;
    if(value === "tinnakorn") {
      alert("Welcome back Tinnakorn")
    }
  }

  incrementCount() {
    this.count += 1;
  }

  greetTinnakorn(updateValue) {
    this.username = updateValue;
    if(updateValue === "tinnakorn") {
      alert("Welcome back Tinnakorn")
    }
  }
}
