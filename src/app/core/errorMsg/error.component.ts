import { Component, Input } from '@angular/core';
import { Error } from 'src/types/Error';

@Component({
  selector: 'app-errorMsg',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  @Input() error: Error = {
    field: "",
    message: ""
  }

}
