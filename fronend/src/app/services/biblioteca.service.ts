import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  endpoint = 'http://localhost:8080/api/biblioteca';

  constructor(private httpClient: HttpClient) { }

  getBiblioteca(){
    return this.httpClient.get(this.endpoint);
  }

}
