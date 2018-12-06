import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../app.api';
import { ICerveja, Cerveja } from '../models/cerveja.model';

@Injectable({
  providedIn: 'root'
})
export class CervejaService {

  constructor(private http: HttpClient) { }

  getCervejas() {
    return this.http.get<ICerveja[]>(`${API}/beers`).toPromise();
  }

  getCerveja(id: number) {
    return this.http.get<ICerveja>(`${API}/beer/${id}`).toPromise();
  }

  postCerveja(cerveja: ICerveja) {
    return this.http.post(`${API}/beer`, cerveja).toPromise();
  }

  putCerveja(cerveja: ICerveja) {
    return this.http.put(`${API}/beer/${cerveja.id}`, cerveja).toPromise();
  }

  deleteCerveja(id: number) {
    return this.http.delete(`${API}/beer/${id}`).toPromise();
  }

}
