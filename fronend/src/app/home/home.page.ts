import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  titulo: String = "El Señor de los Anillos";
  autor: String = "J.R.R. Tolkien";

  constructor(private router: Router) {}
  gotoMyBiblioteca(){
    this.router.navigateByUrl("/my-biblioteca");
  }

}
