import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup
  ongId:number

  constructor(
    private fb:FormBuilder,
    private serviceApi:ApiService,
    private router:Router
    ) { }

  handleRegister(e) {
    e.preventDefault()
    this.serviceApi.createOng(this.form.value).subscribe(async (result:any) => {
      this.ongId = result['id']
      alert(`Seu ID De Acesso: ${this.ongId}`)
      this.router.navigateByUrl('')
    }
    )



  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name : [null, [Validators.required]],
      email : [null, [Validators.required]],
      whatsapp : [null, [Validators.required]],
      city : [null, [Validators.required]],
      uf : [null, [Validators.required]]
    })
  }

}
