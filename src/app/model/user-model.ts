import { ComponentFactory } from "@angular/core";

export class UserModel {
    id: number;
    email: string;
    name: string;
    website: string;
    phone: string;
    address: Address;
    company: Company;
}

export class Address {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    }
}

export class Company {
    bs: string;
    catchPhrase: string;
    name: string;
}