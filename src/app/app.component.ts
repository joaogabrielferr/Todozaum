import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //nome da tag no html
  templateUrl: './app.component.html', //html do componente
  styleUrls: ['./app.component.css'] //css do componente
})
export class AppComponent {
  title:string = 'Taskis';
}
