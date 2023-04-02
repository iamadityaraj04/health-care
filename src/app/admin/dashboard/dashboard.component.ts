import { Component, OnInit } from '@angular/core';
import { Chart ,registerables} from 'chart.js';
import { Doctor } from '../../services/doctor/doctor';
import { DoctorService } from '../../services/doctor/doctor.service';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pageHeading="Dashboard";
  doctorCount!: number;
  patientCount=153;
  appointmentCount=111;
  date=new Date();
  
  doctors: Doctor[] = [];
  constructor(private doctorService:DoctorService){}


  private getAllDoctors(){
    this.doctorService.getAllDoctors().subscribe(
      data=>{
        this.doctors=data;
        this.doctorCount=data.length;
      }
    )
  }

  ngOnInit(){
    var labels = [];
    var today = new Date();
    for ( var i = 6; i >=0 ; i-- ) {
        var date = new Date( today.getFullYear(), today.getMonth(), today.getDate() - i );
        labels.push( date.getDate().toString()+"/"+(date.getMonth()+1).toString());
    }
    this.getAllDoctors();
    const myChart = new Chart("genderChart", {
      type: 'line',
      data: {
          labels: labels,
          datasets: [
            {
              label: 'male',
              data: [7, 9, 18, 15, 21, 23,5],
              backgroundColor: [
                  '#2F58CD'
                ],
              tension:0.4,        
              borderColor: [
                '#2F58CD',
              ],
              borderWidth: 1
            },
            {
              label: 'female',
              data: [
                12, 19, 3, 15, 25, 13,18],
              backgroundColor: [
                '#D864A9',
              ],
              tension:0.4,        
              borderColor: [
                '#D864A9',
              ],
              borderWidth: 1
          }

        ]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Total male/female patients'
                  }
                },
                x: {
                title: {
                  display: true,
                  text: 'in last seven days'
                }
              }
          }
      }
    });
  }
}

