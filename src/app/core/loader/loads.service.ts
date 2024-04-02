import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadsService {
  isHidden: boolean = false

  toggleLoader() {
    this.isHidden = true
    setTimeout(() => {
      this.isHidden = false
    }, 500);
  }

}
