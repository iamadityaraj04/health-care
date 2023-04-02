import { Component, Input } from '@angular/core';

interface SidenavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  title = 'health-care';

  isSideNavCollapsed=false;
  screenWidth=0;
  onToggleSideNav(data:SidenavToggle):void{
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed;
  }
}
