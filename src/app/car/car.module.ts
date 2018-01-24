import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { CarComponent } from './components/car.component';


@NgModule({
    declarations: [
        CarComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    exports:[CarComponent]
})
export class CarModule {
}
