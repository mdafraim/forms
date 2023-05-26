import { HttpRequestService } from './../services/http-request.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private HttpRequestService: HttpRequestService) { }
 
  
  ngOnInit(): void {
   
  }
  singIn = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
 });


  get email(){
    return this.singIn.get('email');
  }
  get password(){
    return this.singIn.get('password');
  }

  login(){
    if(this.singIn.valid) {
      this.HttpRequestService.loginUser(this.singIn.value)
      .subscribe(res => {
        if(res.success) {
          console.log(res)
          alert(res.message)
        }else 
        {
          alert(res.message)
        }
      });
    }
  }

}
