import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  class$$: any = new BehaviorSubject("")
  class$ = this.class$$.asObservable()
  message$$: any = new BehaviorSubject("")
  message$ = this.message$$.asObservable()
  constructor() { }

  showToast(message: string) {
    console.log(message)
    this.class$$.next("show");
    this.message$$.next(message)

    setTimeout(() => {
      this.class$$.next("");
      this.message$$.next("")
    }, 3000);
  }
}
