import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  errorName:boolean=false;
  errorGender:boolean=false;
  errorCountry:boolean=false;
  errorCity:boolean=false;
  errorAge:boolean=false;
  iserror:boolean=false;

  userDetail = new FormGroup({
    username: new FormControl(''),
    Gender: new FormControl(''),
    Country: new FormControl(''),
    City: new FormControl(''),
    age: new FormControl(''),
  })

  validateData() {
    console.log(this.userDetail.value.username);
    console.log(this.userDetail.value);
    var regName = /^[a-zA-Z]{3,50}$/;
    var name = this.userDetail.value.username;
    if (!regName.test(name)) {
      this.errorName=true;
    } else {
      alert('Valid name given.');
    }
    if (!this.userDetail.value.Gender) {
      this.errorGender=true;
      this.iserror=true;
    }
    if (!this.userDetail.value.Country) {
      this.errorCountry=true;
      this.iserror=true;

    }
    if (!this.userDetail.value.Country) {
      this.errorCity=true;
      this.iserror=true;
    }

    if(!this.userDetail.value.age && this.userDetail.value.Country)
    {
       if(this.userDetail.value.Country == "india" || this.userDetail.value.Country == "US")
       {
         this.errorAge=true;
         this.iserror=true;
       }
    }


    if(!this.iserror)
    {
       window.location.reload();
    }


  }

}
