import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit{
  scheduleForm!:FormGroup;
  submitted=false;
  pageHeading="Appointment";
  tableName="Appointments"
  showAppointmentForm="none";
  containerBrightness="brightness(100%)";
  
  constructor(){}
  ngOnInit(): void {

  }

  closeForm(){
    this.showAppointmentForm="none";
    this.containerBrightness="brightness(100%)";
  }
  showForm(){
    this.showAppointmentForm="block";
    this.containerBrightness="brightness(80%)";
  }

  scheduleAppointment=new FormGroup({
    doctorId: new FormControl(''),
    patientId: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
  });

  onSubmit(){
    this.showAppointmentForm="none";
    this.containerBrightness="brightness(100%)";
    console.log(this.scheduleAppointment.value);
    this.scheduleAppointment.reset(); 
  }
  
}
