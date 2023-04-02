import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

interface SidenavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent{

  constructor(private router:Router, private auth:AuthService){}
  navData=[
    {
      routerLink:'dashboard',
      icon:'fa fa-home',
      label:'Dashboard'
    },
    {
      routerLink:'doctor',
      icon:'fa fa-user-md',
      label:'Doctor'
    },
    {
      routerLink:'patient',
      icon:'fa fa-wheelchair',
      label:'Patient'
    },
    {
      routerLink:'appointment',
      icon:'fa fa-calendar',
      label:'Appointment'
    }
  ]


  @Output() onToggleSideNav: EventEmitter<SidenavToggle>=new EventEmitter();
  collapsed=true;
  screenWidth=0;
  toggleCollapse():void{
    this.collapsed=!this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
  }

  onLogout(){
    this.auth.logout();
  }
}
