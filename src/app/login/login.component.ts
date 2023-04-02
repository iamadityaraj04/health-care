import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router:Router, private auth:AuthService){}
  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin']);
    }
  }
  loginHeading="Health Care Management";
  admin: any;
  
  loginForm=new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
  })
  accName="";
  
  onSubmit(){
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe(
        (res)=>{
          this.router.navigate(['admin']);
          this.accName=res.json;
        },
        (err:Error)=>{
          alert(err.message);
        }
      );
    }
  }
}
