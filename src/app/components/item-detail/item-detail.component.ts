import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from '../Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  animal?: Animal; //O ? diz que o animal pode ser retornado ou não.

  constructor(private listService: ListService, private route: ActivatedRoute ) { 
    this.getAnimal()
  }

  ngOnInit(): void {
  }

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
  }
  

}
