import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RootComponent } from './components/root.component';
import { GarageModule } from '../garage/garage.module';

import { GarageService } from '../garage/services/garage.service';
import { CarService } from '../car/services/car.service';

@NgModule({
    declarations: [
        RootComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        GarageModule
    ],
    providers: [
        GarageService,
        CarService
    ],
    bootstrap: [RootComponent]
})
export class RootModule {
}
