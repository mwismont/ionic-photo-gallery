import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {
    let x = 1;
    if (x === 0) {
      debugger;
      console.log("here");
    }
    const password = 'test';
    const apiKey = 'abc123';
    console.log('API Key: ' + apiKey);

    this.login('mike', password);

  }

  login(username: string, password: string) {
    console.log('login: ' + username + '. pwd: ' + password);
  }
}
