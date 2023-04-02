import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private httpClient:HttpClient) { }
  

  private API="http://localhost:4242/api";

  getAllDoctors():Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.API}/doctors`);
  }
  getDocById(id:number):Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.API}/doctors/${id}`);
  }

  addNewDoctor(addDoctor:{}):Observable<Object>{
    return this.httpClient.post(`${this.API}/doctors/insert`,addDoctor);
  }
}
