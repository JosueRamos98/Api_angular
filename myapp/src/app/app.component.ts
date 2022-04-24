import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { Pais } from 'src/models/paises';
import { PaisService } from './service/pais.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PaisService]
})
export class AppComponent {
  paises: Pais[] = [];
  nombre:string="";
  title = 'myapp';
  display: boolean = false;
  constructor(private PaisService: PaisService) { }
  ngOnInit() {
    this.PaisService.getAll().subscribe( res => {
      console.log('Res',res);
    });

  }

  clickEvent(){
    this.getAll();
  }
  showDialog() {
    this.display = true;
}

  getPais(nombre:string){

    this.paises=[];
    this.PaisService.getPais(nombre).subscribe(
      (result: any) =>{
        let paises = result as Pais;
        if (result != "") {
        this.paises.push(paises);}
        else {

          this.display = true;
          
        }
      },
      
      error =>{
        console.log(error);
      }
     );

  }
  limpiar(){
    this.paises=[];
    this.nombre = "";
  }



  getAll() {
    this.paises=[];
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
}
