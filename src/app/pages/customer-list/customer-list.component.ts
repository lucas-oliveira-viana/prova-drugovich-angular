import { Component, OnInit } from '@angular/core';
import { Customer } from './customer-list.interface';
import { ScreenEnum, StatusEnum } from 'src/shared/constants';
import { IPagination } from 'src/shared/constants';
import { CustomerService } from 'src/core/services/customer/customer.service';
import { ContentService } from 'src/core/components/content/content.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})

export class CustomerListComponent implements OnInit {

  statusEnum = StatusEnum;

  pagination: IPagination<Customer> = {
    data: [[]],
    currentPage: 0,
    pages: [],
    itemsPerPage: 5
  }

  constructor(public customerService: CustomerService, private _contentService: ContentService) { }

  async ngOnInit() {
    await this.customerService.initialize();
    this.customerService.assignIdPropertyToList();
    this.createPagination();
  }

  createPagination() {
    const customers = this.customerService.customers;
    const chunkedArray = [];
    for (let i = 0; i < customers.length; i += this.pagination.itemsPerPage) {
      chunkedArray.push(customers.slice(i, i + this.pagination.itemsPerPage));
    }

    this.pagination.data = chunkedArray;
    this.pagination.pages = Array.from(Array(this.pagination.data.length).keys())
  }

  getCurrentPageItems() {
    return this.pagination.data[this.pagination.currentPage];
  }

  setCurrentPage(page: number) {
    this.pagination.currentPage = page;
  }

  update(customer: Customer) {
    this.customerService.setupUpdate(customer);
    this._contentService.currentScreen = ScreenEnum.FORM;
  }
}
