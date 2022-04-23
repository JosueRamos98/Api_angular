import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get('https://localhost:44319/api/Values');


  }

  getPais(nombre: string): Observable<any>{
    return this.http.get('https://localhost:44319/api/Values/' + nombre);
  }

}
