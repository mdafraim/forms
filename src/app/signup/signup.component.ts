import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  singUp = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
 });

 get name(){
  return this.singUp.get('name');
}
 get email(){
   return this.singUp.get('email');
 }
 get password(){
   return this.singUp.get('password');
 }

 register(): void {
  this.http.post('http://localhost:3000/api/auth', this.singUp.value)
  .subscribe(res => {
    console.log(res);
  })
 }

}


