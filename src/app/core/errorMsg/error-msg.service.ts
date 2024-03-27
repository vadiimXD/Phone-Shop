import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Error } from 'src/types/Error';

@Injectable({
  providedIn: 'root'
})
export class ErrorMsgService {
  error$$: any = new BehaviorSubject(undefined)
  error$: any = this.error$$.asObservable()
  constructor() { }

  showError(error: Error | null) {
    
    this.error$$.next(error);
    setTimeout(() => {
      this.error$$.next(undefined);
    }, 3500);
  }
}
