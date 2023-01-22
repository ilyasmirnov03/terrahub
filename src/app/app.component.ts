import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberOfItems: number = 5455;
  logMood() {
    console.log("I'm feeling good!");
  }
}
