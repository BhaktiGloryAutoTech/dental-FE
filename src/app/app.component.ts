import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(
  ) { }

env = environment;

ngOnInit() {

}
}