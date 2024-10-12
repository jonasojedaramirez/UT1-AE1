import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../services/biblioteca.service';


@Component({
  selector: 'app-my-biblioteca',
  templateUrl: './my-biblioteca.page.html',
  styleUrls: ['./my-biblioteca.page.scss'],
})
export class MyBibliotecaPage implements OnInit {


  biblioteca: any = []  

  

  constructor(private bibliotecaService: BibliotecaService) { }
  ngOnInit() {
    this.getAllBiblioteca();

  }
  getAllBiblioteca(){
    this.bibliotecaService.getBiblioteca().subscribe(response => {
      this.biblioteca = response;
    });

  }
    
  }