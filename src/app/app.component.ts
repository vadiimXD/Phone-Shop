import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadsService } from './core/loader/loads.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public loaderService: LoadsService) { }


ngOnInit(): void {
  
}
}
