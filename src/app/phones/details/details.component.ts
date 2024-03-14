import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneService } from '../phone.service';
import { Phone } from 'src/types/Phone';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  phone: Phone | undefined;
  constructor(private activatedRoute: ActivatedRoute, private phoneService: PhoneService) { }
  ngOnInit(): void {
    const phone$: Observable<Phone> = this.phoneService.getPhone(this.activatedRoute.snapshot.params["offerId"]);
    phone$.subscribe(data => {
      console.log(data)
    })

  }
}