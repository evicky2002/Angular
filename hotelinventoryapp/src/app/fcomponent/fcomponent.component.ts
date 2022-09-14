import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fcomponent',
  templateUrl: './fcomponent.component.html',
  styleUrls: ['./fcomponent.component.scss']
})
export class FcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isPressed: boolean = false;
  name: string = "swetha";
  color: string = "blue";

  toggle() {
    this.isPressed = !this.isPressed
  }

}
