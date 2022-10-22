import { Component, OnInit } from '@angular/core';

import { Animal } from '../Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    {name: 'Serena', type: 'Cat', age: 4},
    {name: 'Barry', type: 'Dog', age: 5},
    {name: 'Brutus', type: 'Horse', age: 12},
    {name: 'Black', type: 'Dog', age: 9}
  ];

  animal = {
    name: 'Teste',
    type: 'Alguma coisa',
    age: 10
  }

  animalDetails = ''
  constructor(private listService: ListService) { }

  ngOnInit(): void {}

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal){
    console.log('Removendo animal...');
   this.animals = this.listService.remove(this.animals, animal);
  }
}
