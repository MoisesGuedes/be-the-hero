import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private serviceLogin:LoginService,
    private router:Router
  ) { }

  form:FormGroup
  ongName:string

  HandleLogin(e) {
    console.log(this.form.value)
    e.preventDefault()
    this.serviceLogin.login(this.form.value).subscribe( async (result: any) => {
      this.ongName = result['name']
      localStorage.setItem('ongId', this.form.value.id)
      localStorage.setItem('ongName', result['name'])
      this.router.navigateByUrl('/profile')
    } )
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null, Validators.required]
    })
  }

}
