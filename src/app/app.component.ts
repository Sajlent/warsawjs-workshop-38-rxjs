import { Component } from '@angular/core';
import {BehaviorSubject, fromEvent, interval, merge, of} from 'rxjs';
import {filter, map, take, takeUntil, takeWhile, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'code';

  constructor() {
    // this.observableAndObserver();
    // this.observables();
    this.subjects();
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
        map((val) => 1000 + val),
        filter((val) => val % 2 === 0)
      );
      // .subscribe(
      //   console.log,
      //   null,
      //   () => { console.log('complete'); }
      // );

    const mouseEv$ = fromEvent(document, 'mousemove')
      .pipe(
        map(({clientX, clientY}: MouseEvent) => ({ clientX, clientY })),
        throttleTime(100)
      );

    mouseEv$.subscribe(console.log);
  }

  subjects() {
    const filters = new BehaviorSubject({
      currentPage: 1,
      itemsPerPage: 5
    });

    filters.subscribe(console.log);

    fromEvent(document, 'click').subscribe(() => {
      filters.next({ ...filters.value, itemsPerPage: 10 });
    });
  }

  operatorsFiltering() {
    interval(1000)
      .pipe(
        take(25),
        takeWhile((val) => val < 5),
        takeUntil(fromEvent(document, 'click'))
      )
      .subscribe(console.log);
  }

  operatorsTransformation() {
  }

  operatorsCombination() {
    const mouseEv$ = fromEvent(document, 'mousemove')
      .pipe(
        map(({ clientX, clientY }: MouseEvent) => ({ clientX, clientY })),
        throttleTime(100)
      );

    const clickEv$ = fromEvent(document, 'click')
      .pipe(
        map(({ type }: MouseEvent) => ({ type }))
      );

    merge(
      mouseEv$,
      clickEv$
    )
      .subscribe(console.log);
  }

  hotvscold() {
  }

  higherOrder() {
  }

  customOperator() {
  }
}
