import { Component, OnInit,ElementRef } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable,forkJoin } from 'rxjs';
import {CommonService} from '../../common.service';
@Component({
  selector: 'projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.css']
})
export class ProjectsHomeComponent implements OnInit {
  imagePath: string;
  projectApi: string;
  procurementApi: string;
  loading:boolean;   
  lendingApi: string;
  apikey: string;
  locale: string;
  projectsPath: string;
  procurementsPath: string;
  procurementSearchPath: string;
  projectResponse: any;
  projectListPath: string;
  procurementResponse: any;
  lendingResponse: any;
  constructor(private element: ElementRef,private commonservice: CommonService,private http:HttpClient) {
    
    commonservice.changeClosingStatus.subscribe((val:any) => {
      if (val) {
        
        this.imagePath = val.summary_imagePath; 
        this.projectApi =val.summary_projectApi ;
        this.procurementApi = val.summary_procurementApi;
        this.lendingApi = val.summary_lendingApi;
        this.apikey = val.summary_apikey;          
        this.locale = val.summary_locale;  
        this.projectsPath = val.summary_projectsPath;  
        this.procurementsPath = val.summary_procurementsPath;  
        this.procurementSearchPath = val.summary_procurementSearchPath;  
        this.projectListPath = val.summary_projectListPath;

        this.projectResponse = val.summary_projectResponse;
        this.procurementResponse = val.summary_procurementResponse;
        this.lendingResponse = val.summary_lendingResponse;

      }
    });
   
   }

  ngOnInit() {
  }

}
