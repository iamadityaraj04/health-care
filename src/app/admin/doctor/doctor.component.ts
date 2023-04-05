import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Doctor } from '../../services/doctor/doctor';
import { DoctorService } from '../../services/doctor/doctor.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent{
  showDoctorForm="none";
  showUpdateForm="none";
  containerBrightness="brightness(100%)";
  pageHeading="Doctor";
  doctors: Doctor[] = [];
  id!:number;
  constructor(private doctorService:DoctorService){}


  
  searchId(){
    this.getDocById(this.id);
  }
  
  private getDocById(id:number){
    if(id==null){
      alert("Please enter doctor's id.");
    }
    else{
      this.doctorService.getDocById(id).subscribe(
        (res)=>{
          console.log(res);
        },
        (err)=>{
          if(err instanceof HttpErrorResponse) {
            if(err.status==404){
              alert("Data Not Found!")
            }
            else{
              console.log(`Status: ${err.status} Message: ${err.message}`);
            }
          }
        }
      )
    } 
  }
  
  
  // getAllDoctors
  viewDoctors(){
    this.getAllDoctors();
  }

  private getAllDoctors(){
    this.doctorService.getAllDoctors().subscribe(
      (res)=>{
        this.doctors=res;
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  
  // add new doctor
  addDoctor=new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    dob: new FormControl(),
    specialization: new FormControl(),
    appointments: new FormControl()
  });
  
  showForm(){
    this.showDoctorForm="block";
  }
  
  onSubmit(){
    if(this.addDoctor.value.name==null ||  this.addDoctor.value.email==null || this.addDoctor.value.dob==null || this.addDoctor.value.gender==null || this.addDoctor.value.specialization==null ){
      this.addDoctor.reset();
      alert("All the feilds are mandatory.");
    }else{
      this.saveFormData();
      this.addDoctor.reset();
    }
    this.showDoctorForm="none";
  }

  closeForm(){
    this.showDoctorForm="none";
  }

  
  private saveFormData(){
    this.doctorService.addNewDoctor(this.addDoctor.value).subscribe(
      (res)=>{
        alert("Data Saved Successfully...");
      }
    );
  }

// update
  


// delete 
  deleteDoctor(id:number){
    if(confirm("Do you want to delete it?")){
      this.doctorService.deleteDoctor(id).subscribe(
        (res)=>{
          this.viewDoctors();
        }
      );
    }
  }
}
