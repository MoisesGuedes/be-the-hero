import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private serviceAPI:ApiService,
              private router:Router
          ) { }

  ongName:string = localStorage.getItem('ongName')
  ongId:string = localStorage.getItem('ongId')
  incidents: any = []

  ngOnInit(): void {
    this.serviceAPI.getIncidentsByOng().subscribe(response => this.incidents = response)
  }

  handleDeleteIncident(id) {
    this.serviceAPI.deleteIncident(id).subscribe(console.log)
    console.log(this.incidents)
    this.incidents = this.incidents.filter(incident => incident.id !== id)
  }

  handleLogout() {
    localStorage.clear()
    this.router.navigateByUrl("")
  }

}
