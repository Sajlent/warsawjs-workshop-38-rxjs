import { Component } from '@angular/core';
import { interval, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'code';

  constructor() {
    // this.observableAndObserver();
    this.observables();
    // this.subjects();
    // this.operatorsFiltering();
    // this.operatorsTransformation();
    // this.operatorsCombination();
    // this.hotvscold();
    // this.higherOrder();
    // this.customOperator();

  }

  observableAndObserver() {
    of('hello')
      .subscribe(
        console.log,
        console.error,
        () => {
          console.log('complete');
        }
      );
  }

  observables() {
    interval(1000)
      .pipe(
        map((val) => 1000 + val)
      )
      .subscribe(
        console.log,
        null,
        () => { console.log('complete'); }
      );
  }

  subjects() {
  }

  operatorsFiltering() {
  }

  operatorsTransformation() {
  }

  operatorsCombination() {
  }

  hotvscold() {
  }

  higherOrder() {
  }

  customOperator() {
  }
}
