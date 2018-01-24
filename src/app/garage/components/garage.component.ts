import { Component, OnInit,ViewChild} from '@angular/core';

import { GarageService } from '../services/garage.service';
import {Car} from '../../models/carEntity';

@Component({
    selector: 'garage-component',
    templateUrl: './garage.component.html',
    styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {
    
    carArray:Array<Car> = [];
    message:string = '';
    color:boolean = true;

    constructor(private garageService:GarageService){}
    
    ngOnInit(){
       this.getCarArray();
    }

    open(){
        this.garageService.openModal();
    }

    getCarArray(){
        this.garageService.getCarArray().subscribe(
          res=>{
            this.carArray = this.garageService.enterKey(res);
            console.log(this.carArray);
          }, err=> console.log(err)
        );
    }

    carAddedDone(evt){
        console.log(evt);
        if(evt.color) this.getCarArray();
        this.message = evt.msg;
        this.color = evt.color;
    }

    cancelAlert(evt){
        console.log(evt);
        this.message = evt.msg;
    }

    
    
}
