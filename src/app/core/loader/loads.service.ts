import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadsService {
  isHidden: boolean = false;

  showLoader() {
    this.isHidden = false
  }

  hideLoader() {
    this.isHidden = true
  }
}
