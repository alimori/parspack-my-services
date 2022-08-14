import { Injectable } from '@angular/core';
import { ServiceItem } from '../models/models';
import data from './Services.json';


@Injectable({
    providedIn: 'root',
})
export class DataService {

    listOfData: ServiceItem[] = (data as any).data;

    constructor(
    ) { }

    filterServices(searchValue: string): ServiceItem[] {
        const result = this.listOfData.filter(x => x.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
        return result;
    }

}
