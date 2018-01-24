import { Component,OnInit,EventEmitter,Output} from '@angular/core';

import { CarService } from '../services/car.service';
import {Car} from '../../models/carEntity';


@Component({
    selector: 'car-component',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
    car:Car; ownerName:string = ''; private id:string;
    del:boolean = false;
    alert = {
        msg:'',
        color:true
    }

    @Output('getCar') getCar = new EventEmitter();
    @Output('cancel') cancelAlert = new EventEmitter();

    constructor(private carService:CarService){
        this.car = new Car();
    }

    ngOnInit(){
        this.carService.initModal();
    }
   
    createCar(f){
        this.car.id = Math.floor((Math.random()*1000)+1);
        this.carService.add(this.car).subscribe(
            res=>{
                this.successCRUD("Data Added!!!!",true);
                setTimeout(()=>{
                    f.form.reset();
                    this.carService.close();
                    this.car = new Car();
                    setTimeout(()=>{
                        this.alert.msg='';
                        this.cancelAlert.emit(this.alert);
                    },4000);
                },2000);
            }, err=> {
                console.log(err);
                this.failCRUD("Adding failed!!!!",false);
        });
    }

    successCRUD(msg,color){
        this.alert.msg = msg;
        this.alert.color = color;
        this.getCar.emit(this.alert); 
    }

    failCRUD(msg,color){
        this.alert.msg = msg;
        this.alert.color = color;
        this.getCar.emit(this.alert);
        setTimeout(()=>{
            this.alert.msg='';
            this.cancelAlert.emit(this.alert);
        },4000);
    }

    closeModal(){
        this.carService.close();
    }

    openDeleteModal(f){
        this.carService.open();
        this.del = true;
        this.ownerName = f.ownerName;
        this.id = f.id;
        console.log(f);
    }

    delete(){
        this.carService.delete(this.id).subscribe(
            res=>{
                this.successCRUD("Data has deleted!!!!",true);
                setTimeout(()=>{
                    this.carService.close();
                    setTimeout(()=>{
                        this.alert.msg='';
                        this.cancelAlert.emit(this.alert);
                    },4000);
                },2000);
            }, err=> {
                console.log(err);
                this.failCRUD("Failed to delete!!!!",false);
        });
    }

    
}
