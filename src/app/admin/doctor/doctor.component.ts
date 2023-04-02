import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Doctor } from '../../services/doctor/doctor';
import { DoctorService } from '../../services/doctor/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit{
  showDoctorForm="none";
  containerBrightness="brightness(100%)";
  pageHeading="Doctor";
  doctors: Doctor[] = [];
  id!:number;
  constructor(private doctorService:DoctorService){}

  
  ngOnInit(): void {
    // this.getAllDoctors();
  }
  
  searchId(){
    this.getDocById(this.id);

  }
  
  docByIdInfo:Doctor[]=[];
  private getDocById(id:number){
    if(id==null){
      alert("Please enter doctor's id.");
    }
    else{
      this.doctorService.getDocById(id).subscribe(
        data=>{
          if(data==null){
            alert("Data not found!")
          }else{
            console.log(data);
            
            // this.docByIdInfo=data;
            // alert(this.docByIdInfo);
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
      data=>{
        this.doctors=data;
        console.log(data);
        
      }
    )
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
    this.containerBrightness="brightness(80%)";
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
    this.containerBrightness="brightness(100%)";
  }

  closeForm(){
    this.showDoctorForm="none";
    this.containerBrightness="brightness(100%)";
  }

  
  private saveFormData(){
    if(this.addDoctor.value==null){
      alert("please enter data");
    }
    else{
      this.doctorService.addNewDoctor(this.addDoctor.value).subscribe(
        data=>{
          alert("Data Saved Successfully...");
        }
      )
    }
  }
  
  
}
