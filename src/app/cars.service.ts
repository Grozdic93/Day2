import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars : Array<{ name:string,  model:string,  year:number}> = [{ 
    name: 'Ford', 
    model: 'Mustang', 
    year: 1969 
},{
    name: 'Chevrolet',
    model: 'Camaro',
    year: 1969
},{
    name: 'Mercedes',
    model: 'SLK',
    year: 2000
},{
    name: 'BMW',
    model: 'M3',
    year: 2010}
  ]

  constructor() { }

    
  
}
