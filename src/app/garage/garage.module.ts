import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { GarageComponent } from './components/garage.component';
import { CarModule } from '../car/car.module';


@NgModule({
    declarations: [
        GarageComponent
    ],
    imports: [
        CarModule,
        CommonModule
    ],
    exports:[GarageComponent]
})
export class GarageModule {
}
