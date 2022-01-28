import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup !: FormGroup;

  constructor(private auth:AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    this.initForm();
  }
  initForm(){
    this.formGroup = new FormGroup({
      user_name: new FormControl('', [Validators.required]),
      password: new FormControl('',[Validators.required]),
      slug: new FormControl('',[Validators.required])
    });
  }

  logIn(){
    if(this.formGroup.valid){
      this.auth.logIn(this.formGroup.value).subscribe(result=>{
        if(result.success){
          console.log(result.message);
          localStorage.setItem("token",result.message.token);
          this.router.navigate(['/table'])
        }
        else{
          alert(result.message)
        }
      })
    }
  }

}
function commands(commands: any, arg1: string[]) {
  throw new Error('Function not implemented.');
}

