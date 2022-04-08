import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  flag: boolean = false;

  constructor(private _AuthService: AuthService, private _Router: Router) { }


  getSignUpInfo(signUpForm) {

    if (signUpForm.valid == true) {

      this._AuthService.signUp(signUpForm.value).subscribe((data) => {

        if (data.message == 'success') {

          alert("Account Created");
          this._Router.navigate(['/login']);

        } else {

          this.flag = true;
        }
      })

    }

  };

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'first_name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
      'last_name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z]/)])
    });
  }

}
