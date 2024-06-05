import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import{Router} from '@angular/router'
import { CommonModule } from '@angular/common';
import { login, signup } from '../datatypes';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private userdata:UserdataService, private router:Router)  {
    // this.userdata.users().subscribe
   }
   showlogin=false
  registerdata(data:signup)
  {
    console.warn(data);
    this.userdata.userregister(data).subscribe((result)=>{
      if(result){
        this.router.navigate(['login'])
      }
      console.warn(result)
    })

  }
  login(data:login){

    // console.warn(data)
    this.userdata.userlogin(data)

    
    

  }

  ngOnInit(): void {
  }
  openclick(){

    this.showlogin=true
  }
  opensignup(){
    this.showlogin=false

  }


}
