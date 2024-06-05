import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login, signup } from './datatypes';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }
  users(data:any){
    return this.http.get('http://localhost:3000/register?email=${data.email}&password=${data.password}')
  }
  userregister(data:signup){
    return this.http.post('http://localhost:3000/register',data)
  }
  userlogin(data:login){
    console.warn(data)
    this.http.get(`http://localhost:3000/register?email=${data.email}&password=${data.password}`,
      {observe:'response'}
    ).subscribe((result:any)=>{

      console.warn(result)
      if (result && result.body && result.body.length){
        
        console.warn("user logged in successfully")
      }
      else{
        console.warn("user logg in fail try again")
      }
    })

  }
  contact(data:any){
    return this.http.post('http://localhost:3000/contact',data)
  }
}