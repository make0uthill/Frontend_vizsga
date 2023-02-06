import { Component } from '@angular/core';

interface Book {
  cim: string;
  polc: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
