import { Component, OnInit } from '@angular/core';

import { Car } from '../Car';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {

  cars: Car[] = [];

  car = {
    name: 'Fusca',
    type: 'Coupe',
    age: '1963',
    color: 'black'
  }


  carDetails = ''
  constructor(private listService: ListService) {
    this.getCars()
  }

  ngOnInit(): void {
  }

  showType(car: Car){
    this.carDetails = `O veículo ${car.name} tem o tipo de carroceria: ${car.type}!`;
  }
  showAgeCar(car: Car){
    this.carDetails = `O veículo ${car.name} é de ${car.age}`;
  }
  showColor(car: Car){
    this.carDetails = `O ${car.name} tem a pintura externa de ${car.color}`;
  }

  removeCar(car: Car){
    console.log('Removendo o veículo...');
    this.cars = this.listService.removeCar(this.cars, car);
  }

  getCars(): void {
    this.listService.getAllCars().subscribe((cars) => (this.cars = cars));
  }

}
