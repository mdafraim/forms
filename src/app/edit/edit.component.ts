import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  editForm = new FormGroup({
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required)
  });


  updated(): void{
      this.http.put('http://localhost:3000/api/users/'+ this.id, this.editForm.value)
      .subscribe(res => {
        console.log(res);
      });
  }
}

