import { Injectable } from '@angular/core';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  getAllPatient(): Patient[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
