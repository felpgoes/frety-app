import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { AuthService } from '../auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm
  constructor(
    private formBuilder: FormBuilder,
    private authSc: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  ngOnInit() {}

  onSubmit(){
    this.authSc.login(this.loginForm).then(res => {
      console.log(res);
      
    })
  }

}
