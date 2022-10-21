import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals = [
    {name: 'Serena', type: 'Cat'},
    {name: 'Barry', type: 'Dog'},
    {name: 'Brutus', type: 'Horse'},
    {name: 'Black', type: 'Dog'}
  ];

  animal = {
    name: 'Teste',
    type: 'Alguma coisa'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
