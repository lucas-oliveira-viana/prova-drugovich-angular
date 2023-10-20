import { Component } from '@angular/core';
import { FormControl, UntypedFormControl } from '@angular/forms';
import { ContentService } from 'src/components/content/content.service';
import { ScreenEnum, StatusEnum } from 'src/shared/constants';
import { CustomerService } from 'src/shared/services/customer/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent {

  statusOptions = Object.values(StatusEnum);

  formSubmitted = false;

  constructor(public customerService: CustomerService, private _contentService: ContentService) { }

  readonly CONTROL = (...name: Array<string>) =>
    this.customerService.fg.get(name) as UntypedFormControl;

  save() {
    const formGroup = this.customerService.fg;

    this.formSubmitted = true;

    if (!formGroup.valid) {
      return;
    }


    this.customerService.add(formGroup.value);
    this.refresh();
  }

  refresh() {
    const formGroup = this.customerService.fg;

    formGroup.reset();
    formGroup.patchValue(this.customerService.initialFgValue);

    this.formSubmitted = false;
    this._contentService.currentScreen = ScreenEnum.LIST;
  }

  getFieldErrorType(control: FormControl) {
    return !control.errors ? '' : Object.keys(control.errors)[0]
  }

  checkIfFieldHasError(control: FormControl): boolean {
    return Boolean(this.formSubmitted && control.errors)
  }
}
