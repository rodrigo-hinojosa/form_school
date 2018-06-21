import {AbstractControl} from '@angular/forms';

export class InputsValidators {
  static checkValidValueLv1(control: AbstractControl) {
    if (control.value) {
      const regex = /^[a-zA-ZÑñáéíóúÁÉÍÓÚ._0-9]+$/;
      const isValid = regex.test(control.value);
      return isValid ? null : {validValue: true};
    }
  }

  static checkValidValueLv2(control: AbstractControl) {
    if (control.value) {
      const regex = /^[a-zA-ZÑñáéíóúÁÉÍÓÚ,()._0-9\-# ]+$/;
      const isValid = regex.test(control.value);
      return isValid ? null : {validValue: true};
    }
  }

  static checkValidValueNumbers(control: AbstractControl) {
    if (control.value) {
      const regex = /^[0-9]+$/;
      const isValid = regex.test(control.value);
      return isValid ? null : {validValueNumber: true};
    }
  }

  static checkValidValueDate(control: AbstractControl) {
    if (control.value) {
      const regex = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;
      const isValid = regex.test(control.value.format('DD/MM/YYYY', true));
      return isValid ? null : {validValueDate: true};
    }
  }
}
