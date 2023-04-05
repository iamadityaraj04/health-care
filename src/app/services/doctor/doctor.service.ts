import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Doctor } from './doctor';
import { UpperCasePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private httpClient:HttpClient) { }
  

  private API="http://localhost:4243/api";

  getAllDoctors():Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.API}/doctors`);
  }

  getDocById(id:number):Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.API}/doctor/${id}`);
  }

  addNewDoctor(addDoctor:{}):Observable<Object>{
    return this.httpClient.post(`${this.API}/doctor/insert`,addDoctor);
  }

  updateDoctor(id:number,doctorObj:Doctor){
    return this.httpClient.put(`${this.API}/doctor/update/${id}`,doctorObj);
  }

  deleteDoctor(id:number){
    return this.httpClient.delete(`${this.API}/doctor/delete/${id}`);
  }
}
