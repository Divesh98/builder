import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;

  constructor(private router:Router,private authService:AuthService,private toast:ToastrService) { }

  ngOnInit() {
    //guards
    if(this.authService.loggedIn()){
      this.router.navigate(['/preview']);
    }
    else{
      this.router.navigate(['/signup']);
    }




    this.signupForm =new FormGroup({
      "username": new FormControl(null,[Validators.required,Validators.maxLength(25),Validators.minLength(5)]),
      "email":new FormControl(null,[Validators.required]),
      "password":new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
      "repassword":new FormControl(null,[Validators.required])

    });
  }
  onRegister()
  {
    this.authService.signup(this.signupForm.value).subscribe(data=>{
      if(data.success){
        console.log('data',data);
        this.authService.storeUserData(data.token,data.user);
        if(this.authService.loggedIn){
          this.router.navigate(['preview']);
          this.toast.success('Successfully Registered');
        }
        else{
          this.router.navigate(["/signup"])
        }
        

      }
    });
    this.router.navigate(['/signup']);
  }

}
