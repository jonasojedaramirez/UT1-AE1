import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-biblioteca',
  templateUrl: './my-biblioteca.page.html',
  styleUrls: ['./my-biblioteca.page.scss'],
})
export class MyBibliotecaPage implements OnInit {


  biblioteca: any = [
    {
      id: 1,
      titulo: "El señor de los anillos",
      autor: "J.R.R. Tolkien"

    },{
      id: 2,
      titulo: "Frankenstein",
      autor: "Mary Shelly"
    }

  ]

  constructor() { }
  ngOnInit() {

  }
    
  }