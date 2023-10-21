import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CustomerService } from "./customer.service";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { StatusEnum } from "src/shared/constants";
import { Customer } from "src/app/pages/customer-list/customer-list.interface";

describe('CustomerService', () => {
    let service: CustomerService;
    let httpTestingController: HttpTestingController;

    const customersMock = [
        {
            "name": "Auto-Peças Joaquim LTDA.",
            "cnpj": "111222333000199",
            "status": "Ativo"
        },
        {
            "name": "Lorem Ipsum Auto-peças LTDA.",
            "cnpj": "333222111000122",
            "status": "Inativo"
        },
        {
            "name": "Dolor Sit Amet Auto-peças EIRELI.",
            "cnpj": "333222111000122",
            "status": "Ativo"
        }
    ]
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CustomerService]
        });

        service = TestBed.inject(CustomerService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch customers', async () => {
        const httpClientSpy = spyOn(TestBed.inject(HttpClient), 'get').and.returnValue(of(customersMock));

        await service.initialize();

        expect(httpClientSpy).toHaveBeenCalledOnceWith('https://demo4529396.mockable.io/clients');
        expect(service.customers).toEqual(customersMock);
    });

    it('should add a new customer', () => {
        const customer: Customer = customersMock[0];

        service.add(customer);

        expect(service.customers).toContain(customer);
    });

    it('should update an existing customer', () => {
        const customer: Customer = {
            id: 0,
            name: "Lucas",
            cnpj: "1411455445478",
            status: StatusEnum.ATIVO,
        };

        service.customers = customersMock;
        service.assignIdPropertyToList();
        service.setupUpdate(customer);

        service.add(customer);

        const expected = service.customers
        expected[customer.id as number] = customer

        expect(service.customers).toEqual(expected);
    });

    it('should assign IDs to customers', () => {
        service.customers = customersMock;

        service.assignIdPropertyToList();

        for (let i = 0; i < customersMock.length; i++) {
            expect(service.customers[i].id).toEqual(i);
        }
    });
});