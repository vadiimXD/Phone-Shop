import { Directive, Injectable } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[appImage]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ImageDirective,
    multi: true,
  }]
})
export class ImageDirective {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const pattern: RegExp = /^(http|https):\/\//;

    if (!pattern.test(control.value)) return { Error: "Invalid image url" }
    return null
  }
}
