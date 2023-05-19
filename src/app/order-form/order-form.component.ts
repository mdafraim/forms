import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  constructor(private http: HttpClient) { }
   
  ngOnInit(): void {
   
  }
  orders = new FormGroup({
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required)
  });

  get fullname() {
    return this.orders.get('fullname')
  }
  get email() {
    return this.orders.get('email')
  }
  get contact() {
    return this.orders.get('contact')
  }




  order(){
     this.http.post('http://localhost:3000/api/users', this.orders.value)
     .subscribe(res => {
      console.log(res);
     })
  }
}
