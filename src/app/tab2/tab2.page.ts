import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {
    let msg = 'Hello';
    'World';

    this.looperTest(10);

      let req = {
        'cc': '1234-1234-1234-1234',
        'exp': '2022-12-31',
        'cvv': '144'
      }

      let CCNumber = req.cc
      let expDate = req.exp
      let CVV = req.cc
      let orderNumber = 'abc123'
      let success = this.processPayment(CCNumber, expDate, CVV, orderNumber)
      console.log('payment info: ' + JSON.stringify(req))
  }

  looperTest(i) {
    for (let count=0; count < i; i++) {
      console.log('here: ' + count);
    }
  }

  processPayment(CCNumber, expDate, CVV, orderNumber) {
  }
}
