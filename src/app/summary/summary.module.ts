import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule} from '@angular/common/http';
import {Routes,RouterModule} from '@angular/router';
import { ProjectsHomeComponent } from './projects-home/projects-home.component';
import { ProjectComponent } from './project/project.component';
import { ProcurementComponent } from './procurement/procurement.component';
import { LendingIndicatorsComponent } from './lending-indicators/lending-indicators.component';
import { DateFormatPipe } from '../pipes/date.pipe';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
declare var require: any;
export function highchartsFactory() {
  return require('highcharts/highstock');
}
const routes:Routes=[
  {
    path:'',component:ProjectsHomeComponent,
    // children:[{
    //  path:'',redirectTo:''
    // },{
    //   path:'',component:Test1Component
    // }]
  }
]

@NgModule({
  declarations: [ProjectsHomeComponent, ProjectComponent, ProcurementComponent, 
    LendingIndicatorsComponent,DateFormatPipe],
  imports: [
    CommonModule,HttpClientModule,ChartModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
})
export class SummaryModule { }
