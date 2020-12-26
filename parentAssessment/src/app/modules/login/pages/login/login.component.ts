import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLogicService } from '../../services/auth-logic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authLogicService: AuthLogicService,
    private router:Router) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  /**
   * `initLoginForm()` to initate login form
   */
  initLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  get email() {
    return this.loginForm.get('email') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  login() {
    this.authLogicService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(res => {
      if (res) {
        localStorage.setItem("token", JSON.stringify(res));
        if(localStorage.getItem('token')){
          this.router.navigate(['/users']);
        }
      }
    })
  }

}
