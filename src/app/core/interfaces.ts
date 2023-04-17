export interface IAuthor{
    id:string;
    name:string;
    contactDetails:IContactDetails
}
interface IContactDetails{
    phone:string;
    address:IAddress;
}
interface IAddress{
    street:string,
    city: string,
    postcode: string,
    country: string
}
export class Author 
{
    id: string | null;
    name: string;
    street: string;
    city: string;
    postcode: string;
    country: string;
    phone: string;
    constructor(id: string | null, name: string, street: string, city: string, postcode: string, country: string, phone: string) {
        this.id = id;
        this.name = name;
        this.street = street;
        this.city = city;
        this.postcode = postcode;
        this.country = country;
        this.phone = phone;
    }
}