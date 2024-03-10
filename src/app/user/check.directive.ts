import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[appCheck]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CheckDirective,
    multi: true,
  }]
})
export class CheckDirective {

  @Input() appCheck: any | undefined;

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const password = this.appCheck
    const repassword = control.value
    
    if (!password) return { Error: "Empty fields.." }
    if (!repassword) return { Error: "Empty fields.." }
    if (repassword !== password) return { Error: "Passwords dont matches!" }

    return null
  }

}
