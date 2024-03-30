import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { PhoneService } from "./phone.service";
import { User } from "src/types/User";


@Injectable({ providedIn: "root" })

export class ownerGuard implements CanActivate {
    constructor(private router: Router, private phoneService: PhoneService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return new Observable<boolean | UrlTree>((observer) => {
            const currUserStr = localStorage.getItem("auth") as string;
            const currUserObj: User = JSON.parse(currUserStr)
            this.phoneService.getPhone(route.params["offerId"]).subscribe(data => {
                if (data.owner._id == currUserObj.userId) {
                    observer.next(true)
                    observer.complete()
                } else {
                    observer.next(false)
                    observer.complete()
                    this.router.navigateByUrl("/404")
                }
            })
        })
    }
}



