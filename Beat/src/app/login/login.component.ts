import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any;
  password: any
  
  router: any;
  loginForm : FormGroup | any;
  hide = true;
  constructor() { }
  ngOnInit(){
    this.loginForm = new FormGroup(
      {
        email : new FormControl('',[Validators.required,Validators.email]),
        password : new FormControl('',[Validators.required,Validators.minLength(6)])
      }
    );
    
  }

  onLogin() : void {
    if(this.email == 'admin@gmail.com' && this.password == 'admin123'){
     this.router.navigate(["homepage"]);
    }else {
      alert("Invalid credentials");
    }
  }
  }


