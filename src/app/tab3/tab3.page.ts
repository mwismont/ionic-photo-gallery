import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {
    this.test;
    let x = 10;
    if (x === x) {
        x = 20;
    }
  }

  test() {
    console.log('testing');
  }
}
