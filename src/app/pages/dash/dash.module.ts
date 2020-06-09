import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashRoutingModule } from './dash-routing.module';

@NgModule({
  declarations: [DashComponent],
  imports: [CommonModule, SharedModule, DashRoutingModule ]
})
export class DashModule { }
