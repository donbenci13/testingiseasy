import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SampletestService } from '../../services/sampletest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user 
  loginForm: FormGroup;
  formValid: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userSvc: SampletestService
   ) {
    this.loginForm = this.fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\\b")])],
      'password': [null,Validators.compose([ Validators.required,Validators.minLength(8)])]
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.formValid = this.loginForm.valid;
    });
  }

  onSubmit() {
    this.user = this.loginForm.value;
    return this.userSvc.login(this.user.email, this.user.password);
  }

  ngOnInit(){
    
  }

}
