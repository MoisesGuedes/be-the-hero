import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogonComponent } from './views/logon/logon.component';
import { RegisterComponent } from './views/register/register.component';
import { ProfileComponent } from './views/profile/profile.component';
import { NewIncidentComponent } from './views/new-incident/new-incident.component';
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
  {path:'' , component: LogonComponent},
  {path:'register' , component: RegisterComponent},
  {path:'profile' , component: ProfileComponent},
  {path:'newIncident' , component: NewIncidentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
