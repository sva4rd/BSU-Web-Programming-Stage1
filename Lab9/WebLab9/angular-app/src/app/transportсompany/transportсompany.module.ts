import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportCenterComponent } from './transport-center/transport-center.component';
import { TransportListComponent } from './transport-list/transport-list.component';
import { TransportDetailsComponent } from './transport-details/transport-details.component';



@NgModule({
  declarations: [
    TransportCenterComponent,
    TransportListComponent,
    TransportDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransportСompanyModule { }
