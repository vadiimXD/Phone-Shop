import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Phone } from 'src/types/Phone';
import { PhoneService } from '../phone.service';
import { tap } from 'rxjs';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  phones: Phone[] | undefined;

  constructor(public phoneService: PhoneService) { }

  ngOnInit(): void {
  
    this.phoneService.getAllPhones()
    this.phoneService.phones$.subscribe((data: Phone[] | undefined) => this.phones = data)
  }




}
