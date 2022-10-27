import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Medicos } from 'src/app/model/medicos/medicos';
import { MedicosService } from 'src/app/services/medicos/medicos.service';

@Component({
  selector: 'app-lmedicos',
  templateUrl: './lmedicos.component.html',
  styleUrls: ['./lmedicos.component.css']
})
export class LmedicosComponent implements OnInit {

  medicos$!: Observable<Medicos[]>;
  constructor(private serviceMedicos: MedicosService) {
    this.serviceMedicos.listaDeMedicos().pipe(
      catchError((err) =>{
        console.log(err);
      return of([]);
    }));
      }

  ngOnInit(): void {

  }

lista(){
  const arau= this.medicos$.subscribe(
  (res) => console.log(res)
  )
console.log(arau);
}
}
