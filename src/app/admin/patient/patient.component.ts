import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  pageHeading="Patient";
  tableName="Patients"
  showPatientForm="none";
  containerBrightness="brightness(100%)";
  
  
  viewAllPatient() {
  throw new Error('Method not implemented.');
  }
  closeForm(){
    this.showPatientForm="none";
    this.containerBrightness="brightness(100%)";
  }
  showForm(){
    this.showPatientForm="block";
    this.containerBrightness="brightness(80%)";
  }

  addPatient=new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    dob: new FormControl(''),
    mobile: new FormControl(''),
    docId:new FormControl(''),
});

  onSubmit(){
    this.showPatientForm="none";
    this.containerBrightness="brightness(100%)";
    console.log(this.addPatient.value);
    this.addPatient.reset(); 
  }
  searchById='';
  searchId(){
    alert("Searched Id: "+this.searchById);
  }
}
