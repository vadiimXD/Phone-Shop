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

    if (!this.appCheck) return { Error: "Empty fields.." }
    if (!control.value) return { Error: "Empty fields.." }
    if (control.value !== this.appCheck) return { Error: "Passwords dont matches!" }

    return null
  }

}
