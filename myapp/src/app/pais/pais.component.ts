import { PaisService } from './../service/pais.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Pais } from 'src/models/paises';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})


export class PaisComponent implements OnInit {

  public paises: Pais[] = [];

  constructor( private PaisService: PaisService) { }

  getAll(){
    this.PaisService.getAll().subscribe(
      (result: any) =>{
        
        for (let i = 0; i < result.length; i++) {
          let paises = result[i] as Pais;      
            this.paises.push(paises);}
         
      },
      error =>{
        console.log(error);
      }
     );
  }

  getPais(NgModule : Pais){

    this.PaisService.getPais(NgModule.nombre).subscribe(
      (result: any) =>{
        let paises = result as Pais;
        this.paises.push(paises);
      },
      error =>{
        console.log(error);
      }
     );

  }

  ngOnInit() {

    this.getAll();
  }

}
