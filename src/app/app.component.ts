import { Component } from '@angular/core';
import { OperationViewModel } from './operation/operation.component';

const UPPER_LIMIT = 20;
const LOWER_LIMIT = 0;
const INCREMENT = 'Increment';
const DECREMENT = 'Decrement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  counter = LOWER_LIMIT;
  incrementViewModel: OperationViewModel = {
    label: INCREMENT,
    title: 'Click here to increment the counter',
  };

  decrementViewModel: OperationViewModel = {
    label: DECREMENT,
    title: 'Click here to decrement the counter',
  };

  increment() {
    if (this.counter < UPPER_LIMIT) {
      ++this.counter;
    } else {
      alert('Maximum reached');
    }
  }

  decrement() {
    if (this.counter > LOWER_LIMIT) {
      --this.counter;
    } else {
      alert('Minimum reached');
    }
  }

  onOperationHandler(args: OperationViewModel) {
    if (args.label === INCREMENT) {
      this.increment();
    }

    if (args.label === DECREMENT) {
      this.decrement();
    }
  }
}
