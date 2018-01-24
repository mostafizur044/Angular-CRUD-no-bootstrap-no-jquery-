import { Injectable } from '@angular/core';

import { CarService } from '../../car/services/car.service';


@Injectable()
export class GarageService {

  constructor(
    private carService:CarService
  ) { }

  openModal(){
    this.carService.open();
  }

  getCarArray(){
    return this.carService.get();
  }

  enterKey(data:Object){
    let newArray:Array<any>=[];
    for(let key in data) {
        data[key]['id']= key;
        newArray.push(data[key]);
    };
    return newArray;
  }

}