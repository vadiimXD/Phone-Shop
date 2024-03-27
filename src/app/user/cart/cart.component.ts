import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserInfo } from 'src/types/userInformation';
import { PhoneService } from 'src/app/phones/phone.service';
import { Phone } from 'src/types/Phone';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user: UserInfo | undefined;
  totalPrice$$: any = new BehaviorSubject(0)
  constructor(private userService: UserService, public phoneService: PhoneService) { }
  ngOnInit(): void {
    this.totalPrice$$.next(0)
    this.userService.getUser();
    this.userService.userInfo$.subscribe((data: UserInfo | undefined) => {
      this.user = data
      
      if (data?.boughtList?.length != 0) {
 
        let price: number = 0
        data?.shoppingCart?.forEach((element: Phone) => {
          
          price += Number(element.price)
        });
        this.totalPrice$$.next(price)
      }
    })
  }
}
