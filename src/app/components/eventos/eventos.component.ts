import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void {
    // this.show = true; //exibi a mensagem que está contida em show
    this.show = !this.show; // Isso é um toggle que mostra os valores invertidos quando se clica no botão
  } 
}
