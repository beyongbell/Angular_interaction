import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  ngOnInit() {
    this._interactionService.teacherMessage$.subscribe(
      message => {
        if(message === "Good Moring") {
          alert("Good Morning Teacher")
        } else {
          alert("Thank You Teacher")
        }
      }
    );
  }

}
