import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars : Array<{ name:string,  model:string,  year:number}> = [];

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.cars = this.carsService.cars;
  }

}


