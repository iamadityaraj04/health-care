import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [

  {path:"", component:BodyComponent, children:[

    {path:"", redirectTo:"dashboard",pathMatch:"full"},
    {path:"dashboard", component:DashboardComponent},
    {path:"doctor", component:DoctorComponent},
    {path:"patient", component:PatientComponent},
    {path:"appointment", component:AppointmentComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
