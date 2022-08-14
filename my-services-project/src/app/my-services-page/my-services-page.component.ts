import { Component, OnDestroy, OnInit } from '@angular/core';
import { SERVISE_TYPES } from '../constants/constants';
import { ServiceItem, ServiceType } from '../models/models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-my-services-page',
  templateUrl: './my-services-page.component.html',
  styleUrls: ['./my-services-page.component.scss']
})
export class MyServicesPageComponent implements OnInit {
  searchValue = '';
  visible = false;

  listOfDisplayData: ServiceItem[] = [];
  serviceTypes: ServiceType[] = SERVISE_TYPES;
  otherNumber = 0;

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.search();
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(term?: string): void {
    this.visible = false;
    if (term) {
      this.listOfDisplayData = this.dataService.filterServices(term);
    }
    else {
      this.listOfDisplayData = this.dataService.filterServices(this.searchValue);
    }
    this.otherNumber = this.listOfDisplayData.length;
    this.serviceTypes.forEach(element => {
      element.number = this.listOfDisplayData.filter(x => x.type === element.title)?.length;
      this.otherNumber -= element.number;
    })
  }

}

