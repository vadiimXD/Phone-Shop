import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadsService } from './core/loader/loads.service';
import { ErrorMsgService } from './core/errorMsg/error-msg.service';
import { Error } from 'src/types/Error';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  error: Error | undefined;
  constructor(public loaderService: LoadsService, public errorMsgService: ErrorMsgService) { }

  ngOnInit(): void {
    this.errorMsgService.error$.subscribe((data: Error | undefined) => this.error = data)
  }
}
