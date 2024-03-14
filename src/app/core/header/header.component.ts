import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoadsService } from '../loader/loads.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public loaderService: LoadsService, public userService: UserService) { }

  

  get isLogged(): boolean {
    return this.userService.checkIsLogged
  }

}
