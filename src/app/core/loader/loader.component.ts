import { Component } from '@angular/core';
import { LoadsService } from './loads.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  constructor(public loaderService: LoadsService) { }
}
