import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get('/api/Values');


  }

  getPais(nombre: string): Observable<any>{
    return this.http.get('/api/Values/' + nombre);
  }

}
