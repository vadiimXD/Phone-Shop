import { AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PhoneService } from '../phone.service';
import { Phone } from 'src/types/Phone';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  phones: Phone[] | undefined;

  constructor(private phoneService: PhoneService) {

  }

  ngOnInit(): void {
    const phone$ = this.phoneService.getAllPhones()
    phone$.subscribe(phones => {
      this.phones = phones
    })
  }



}
