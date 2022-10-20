import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Matheus'
  age: number = 21
  job = 'Garoto que Programa'
  hob = ['correr', 'jogar', 'estudar']
  car = {
    name: 'Mercedes G63 AMG',
    year: 2022
  }
  constructor() { }

  ngOnInit(): void {
  }

}
