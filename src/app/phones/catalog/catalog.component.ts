import { AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PhoneService } from '../phone.service';
import { Phone } from 'src/types/Phone';
import { UserService } from 'src/app/user/user.service';
import { tap } from 'rxjs';
import { UserInfo } from 'src/types/userInformation';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  phones: Phone[] | undefined;
  user: UserInfo | undefined;
  constructor(public phoneService: PhoneService, private userService: UserService) {

  }

  get isLogged(): boolean {
    return this.userService.checkIsLogged
  }

  ngOnInit(): void {
    this.phoneService.getAllPhones()
    this.userService.getUser();
    this.phoneService.phones$.subscribe((data: Phone[] | undefined) => this.phones = data)
    this.userService.userInfo$.subscribe((data: UserInfo | undefined) => this.user = data)
  }

}
