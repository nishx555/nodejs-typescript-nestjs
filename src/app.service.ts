/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Injectable } from '@nestjs/common';
export interface State {
  name: string;
}
@Injectable()
export class AppService {
  datasource: State[];
  datasourceArray: string[];
  constructor() {
    this.datasource = [
      { name: 'Andhra Pradesh' },
      { name: 'Arunachal Pradesh' },
      { name: 'Assam' },
      { name: 'Bihar' },
      { name: 'Chhattisgarh' },
      { name: 'Goa' },
      { name: 'Gujarat' },
      { name: 'Haryana' },
      { name: 'Himachal Pradesh' },
      { name: 'Jammu and Kashmir' },
      { name: 'Jharkhand' },
      { name: 'Karnataka' },
      { name: 'Kerala' },
      { name: 'Madhya Pradesh' },
      { name: 'Maharashtra' },
      { name: 'Manipur' },
      { name: 'Meghalaya' },
      { name: 'Mizoram' },
      { name: 'Nagaland' },
      { name: 'Odisha' },
      { name: 'Punjab' },
      { name: 'Rajasthan' },
      { name: 'Sikkim' },
      { name: 'Tamil Nadu' },
      { name: 'Telangana' },
      { name: 'Tripura' },
      { name: 'Uttarakhand' },
      { name: 'Uttar Pradesh' },
      { name: 'West Bengal' },
      { name: 'Andaman and Nicobar Islands' },
      { name: 'Chandigarh' },
      { name: 'Dadra and Nagar Haveli' },
      { name: 'Daman and Diu' },
      { name: 'Delhi' },
      { name: 'Lakshadweep' },
      { name: 'Puducherry' },
    ];
    this.datasourceArray = <string[]>this.datasource.map((state) => state.name);
  }

  //For initial demo purpose, added a States object array and returns String array
  getDatasource(searchText: string): string[] {
    if (searchText) {
      return this._filter(searchText);
    } else {
      return this.datasourceArray;
    }
  }

  private _filter(inputTextOption: string): string[] {
    const filterValue = inputTextOption.toLowerCase();

    return this.datasourceArray.filter(
      (option) => option.toLowerCase().indexOf(filterValue) === 0,
    );
  }
}
