import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.css']
})
export class NewIncidentComponent implements OnInit {

  form:FormGroup

  constructor(private fb:FormBuilder, private serviceAPI: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      value: [null, Validators.required]
    })
  }

  handleCreateIncident(e) {
    e.preventDefault()
    this.serviceAPI.createIncident(this.form.value).subscribe(console.log)
    this.router.navigateByUrl('/profile')
  }

}
