import { Injectable } from '@angular/core';
import { Animal } from '../components/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';//faz com que a requisição corra da melhor maneira possível
import { Car } from '../components/Car';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals'

  constructor(private http: HttpClient) { }

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.name !== a.name);
  }
  removeCar(cars: Car[], car: Car){
    return cars.filter((a) => car.name !== a.name);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)//isso é um padrão do angular, pois ele precisa observar se o arry chega na requisição da api.
  }

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl)
  }
}
