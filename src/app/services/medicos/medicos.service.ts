import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicos } from 'src/app/model/medicos/medicos';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private httpClient: HttpClient) { }

  listaDeMedicos() {
    return this.httpClient.get<Medicos>('http://localhost:3000/medicos')
      .pipe(
        (res) => res,
        (err) => err
      );
  }
}
