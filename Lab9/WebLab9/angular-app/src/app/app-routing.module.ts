import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TransportCenterComponent} from "./transportсompany/transport-center/transport-center.component";
import {TransportDetailsComponent} from "./transportсompany/transport-details/transport-details.component";


const routes: Routes = [
  { path: '', component: TransportCenterComponent },
  { path: 'transport-company', redirectTo: '', pathMatch: 'full' },
  { path: 'transport-company/transport-details/:id', component:TransportDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
