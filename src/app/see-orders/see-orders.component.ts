import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-see-orders',
  templateUrl: './see-orders.component.html',
  styleUrls: ['./see-orders.component.scss']
})
export class SeeOrdersComponent implements OnInit {
   user:any;
  constructor(private http: HttpClient) { }
 
  ngOnInit(): void {
    this.getUser();
  }
  
  getUser() {
    this.http.get('http://localhost:3000/api/users')
    .subscribe(Response => {
      console.log(Response);
      this.user = Response;
    });
  }
 delete(id:string){
  this.http.delete('http://localhost:3000/api/users/' + id).subscribe(res => console.log(res));
 }


}
