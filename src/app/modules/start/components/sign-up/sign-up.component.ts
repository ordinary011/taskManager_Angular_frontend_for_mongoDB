import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import { ResponseModel } from 'src/app/models/responseModel';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onSubmit(regForm) {
    if (regForm.invalid) return alert("sorry the form is not valid can't submit");
    if (regForm.value.password !== regForm.value.passwordConfirm) return alert('could not confirm the password please try again');
    this.userService.signUp(regForm.value).subscribe((res:ResponseModel) => {
      this.router.navigate(['start/logIn']) 
    }) 
  }

}
