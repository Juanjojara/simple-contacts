import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const accepted = /^\+\d{2} \d{10}$/.test(control.value);
    return accepted ? null : {phoneValidator: {value: `phone number $(control.value) is invalid`}};
  }
}
@Directive({
  selector: '[phoneValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef( () => PhoneValidator),
    multi: true
  }]
})
export class PhoneValidator implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    return phoneNumberValidator()(control);
  }
  /*registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }*/

}
