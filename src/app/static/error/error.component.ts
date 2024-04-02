import { Component, OnInit } from '@angular/core';
import { LoadsService } from 'src/app/core/loader/loads.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private loadService: LoadsService) { }

  ngOnInit(): void {
    // this.loadService.toggleLoader()
  }
}
