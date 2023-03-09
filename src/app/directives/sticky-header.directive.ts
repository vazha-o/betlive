import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { throttleTime, pairwise, map, distinctUntilChanged, share, debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appStickyHeader]'
})
export class StickyHeaderDirective implements OnDestroy {
  private scroll$: Observable<number>;
  private subscription!: Subscription;

  constructor(private el: ElementRef) {
    this.scroll$ = fromEvent(window, 'scroll').pipe(
      debounceTime(100),
      map(() => window.pageYOffset),
      distinctUntilChanged(),
    );
  }
  ngOnInit() {
    this.subscription = this.scroll$.subscribe(() => {
      if (window.pageYOffset <= 0 ) {
        this.el.nativeElement.classList.remove('app__header--bg');
      } else {
        this.el.nativeElement.classList.add('app__header--bg');
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
