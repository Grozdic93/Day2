import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarsService } from '../cars.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myCars : Array<{ name:string,  model:string,  year:number}> = [];
  userInput = {name: '', model: '', year: 0};
  constructor(private carsService: CarsService) {}

  myForm = new FormGroup({
    'name' : new FormControl("", Validators.required),
    'model' : new FormControl("", Validators.required),
    'year' : new FormControl(null, Validators.required),
    });
 
  ngOnInit() {
   this.myCars = this.carsService.cars;
  }
  

  


  onSubmit() {
    let a : any = this.myForm.value.name;
    this.userInput.name = a;
    let b : any = this.myForm.value.model;
    this.userInput.model = b;
    let c : any = this.myForm.value.year;
    this.userInput.year = c;
    this.myCars.push(this.userInput)
    this.myForm.reset()

  }
 

  

}
