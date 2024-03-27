import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadsService {
  isHidden$$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  showLoader() {
    this.isHidden$$.next(false)
  }

  hideLoader() {
    this.isHidden$$.next(true)

  }


}
