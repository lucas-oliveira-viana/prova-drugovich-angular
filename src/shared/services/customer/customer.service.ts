import { Injectable } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { StatusEnum } from "../../constants";
import { Customer } from "src/pages/customer-list/customer-list.interface";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable()
export class CustomerService {
    customers: Customer[] = [];

    fg: UntypedFormGroup = this._fb.group({
        name: [null, Validators.required],
        cnpj: [null, Validators.required],
        status: StatusEnum.ATIVO
    })

    initialFgValue: UntypedFormGroup;

    customerToEditId: number | null = null;

    constructor(private _fb: UntypedFormBuilder, private _http: HttpClient) { }

    async initialize() {
        if (this.customers.length) {
            return;
        }

        const request$ = this._http.get<Customer[]>('https://demo4529396.mockable.io/clients');

        this.customers = await lastValueFrom(request$)

        this.initialFgValue = this.fg.value;
    }

    add(customer: Customer) {
        if (this.customerToEditId != null) {
            this.customers[this.customerToEditId] = customer;
            this.customerToEditId = null;
            return;
        }

        this.customers.push(customer)
    }

    setupUpdate(customer: Customer) {
        if (customer.id === null || customer.id === undefined) {
            return;
        }

        this.customerToEditId = customer.id
        this.fg.patchValue(customer)
    }

    assignIdPropertyToList() {
        this.customers = this.customers.map((customer, index) => ({
            ...customer,
            id: index
        }))
    }
}