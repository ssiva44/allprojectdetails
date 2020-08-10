import { Component,ElementRef } from '@angular/core';
import {CommonService} from './common.service';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable,forkJoin } from 'rxjs';
@Component({
  selector: 'allprojects',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'allprojects';
  summary_locale: string;
  loading: boolean;
  summary_imagePath: string;
  summary_projectApi: string;
  summary_procurementApi: string;   
  summary_lendingApi: string;
  summary_apikey: string;
  summary_projectsPath: string;
  summary_procurementsPath: string;
  summary_procurementSearchPath: string;
  summary_projectResponse: any;
  summary_projectListPath: string;
  summary_procurementResponse: any;
  summary_lendingResponse: any;

  procurement_imagePath: string;
  procurement_locale: string;
  procurement_domain: string;
  procurement_projectId: string;
  procurement_noticesApiUrl: string;
  procurement_contractsApiUrl: string;
  procurement_planApiUrl: string;

  document_imagePath:string;
  document_locale:string;
  document_projectsApiUrl:string;
  document_archivalApiUrl:string;
  document_projectid:string;
  document_tabType:string;

  newsmedia_imagePath:string;
newsmedia_projectCode:string;
newsmedia_languageCode:string;
newsmedia_url:string;
newsmedia_multimediaApi:string;

photo_imagePath:string;
photo_peopleImage:string;
photo_projects_photo_gallery_api:string;
photo_projectCode:string;
photo_languageCode:string;
photo_details_path:string;
photo_viewall_label:string;
photo_viewall_link:string;

  constructor(private element: ElementRef,private commonservice:CommonService,private http:HttpClient) {   
    this.summary_imagePath = this.element.nativeElement.getAttribute('summary-imagePath'); 
    this.summary_projectApi = this.element.nativeElement.getAttribute('summary-project-api');
    this.summary_procurementApi = this.element.nativeElement.getAttribute('summary-procurement-api');
    this.summary_lendingApi = this.element.nativeElement.getAttribute('summary-lending-api');
    this.summary_apikey = this.element.nativeElement.getAttribute('summary-apikey');          
    this.summary_locale = this.element.nativeElement.getAttribute('summary-locale');  
    this.summary_projectsPath = this.element.nativeElement.getAttribute('summary-projects-path');  
    this.summary_procurementsPath = this.element.nativeElement.getAttribute('summary-procurements-path');  
    this.summary_procurementSearchPath = this.element.nativeElement.getAttribute('summary-procurement-search-path');  
    this.summary_projectListPath = this.element.nativeElement.getAttribute('summary-project-list-path'); 

		
   
    this.newsmedia_imagePath = this.element.nativeElement.getAttribute('newsmedia-imagePath'); 
    this.newsmedia_projectCode = this.element.nativeElement.getAttribute('newsmedia-projectCode');
    this.newsmedia_languageCode = this.element.nativeElement.getAttribute('newsmedia-languageCode');    
    this.newsmedia_url = this.element.nativeElement.getAttribute('newsmedia-news-media-api');
    this.newsmedia_multimediaApi = this.element.nativeElement.getAttribute('newsmedia-multimedia-api'); 

     let headers = new HttpHeaders({
      'apikey':this.summary_apikey,
     });
  
      const combined =this.http.post(this.summary_projectApi + '&apilang=' + this.summary_locale, '');
      const combined1=this.http.post(this.summary_procurementApi + '&apilang=' + this.summary_locale, '');
      const combined2= this.http.get(this.summary_lendingApi, { headers: headers });
     
    forkJoin([combined,combined1,combined2]).subscribe(combinedValues => {  
       
      const [ projectResponse , procurementResponse, lendingResponse ] = combinedValues; 
      this.summary_projectResponse = projectResponse;
      this.summary_procurementResponse = procurementResponse;
      this.summary_lendingResponse = lendingResponse;

      let objProject={
        summary_imagePath :this.summary_imagePath,
        summary_projectApi:this.summary_projectApi,
        summary_procurementApi:this.summary_procurementApi,
        summary_lendingApi:this.summary_lendingApi,
        summary_apikey:this.summary_apikey,
        summary_locale:this.summary_locale,
        summary_projectsPath:this.summary_projectsPath,
        summary_procurementsPath:this.summary_procurementsPath,
        summary_procurementSearchPath:this.summary_procurementSearchPath,
        summary_projectListPath:this.summary_projectListPath,
        summary_projectResponse :this.summary_projectResponse,
        summary_procurementResponse:this.summary_procurementResponse,
        summary_lendingResponse :this.summary_lendingResponse,

      }
      this.commonservice.closingStatusUpdated(objProject);
    //  this.loading = false;
    });

    this.procurement_imagePath = this.element.nativeElement.getAttribute('procurement-imagePath');
		this.procurement_locale = this.element.nativeElement.getAttribute('procurement-locale');
		this.procurement_domain = this.element.nativeElement.getAttribute('procurement-domain');
    this.procurement_projectId = this.element.nativeElement.getAttribute('procurement-projectId');
    this.procurement_noticesApiUrl=this.element.nativeElement.getAttribute('procurement-noticesApiUrl');
		this.procurement_contractsApiUrl=this.element.nativeElement.getAttribute('procurement-contractsApiUrl');
    this.procurement_planApiUrl=this.element.nativeElement.getAttribute('procurement-planApiUrl');
    
    this.document_imagePath = this.element.nativeElement.getAttribute('document-imagePath');
		this.document_locale = this.element.nativeElement.getAttribute('document-locale');
		this.document_projectsApiUrl=this.element.nativeElement.getAttribute('document-projectsApiUrl');
		this.document_archivalApiUrl=this.element.nativeElement.getAttribute('document-archivalApiUrl');
		this.document_projectid=this.element.nativeElement.getAttribute('document-projectid');
    this.document_tabType=this.element.nativeElement.getAttribute('document-type');
    
    
    this.photo_imagePath = this.element.nativeElement.getAttribute('photo-imagePath'); 
    this.photo_peopleImage = this.element.nativeElement.getAttribute('photo-peopleImage'); 
    this.photo_projectCode = this.element.nativeElement.getAttribute('photo-projectCode');
    this.photo_languageCode = this.element.nativeElement.getAttribute('photo-languageCode');    
    this.photo_projects_photo_gallery_api = this.element.nativeElement.getAttribute('photo-projects-photo-gallery-api');
    this.photo_details_path = this.element.nativeElement.getAttribute('photo-details-path');     
    this.photo_viewall_label = this.element.nativeElement.getAttribute('photo-viewall-label');     
    this.photo_viewall_link = this.element.nativeElement.getAttribute('photo-viewall-link'); 
   
    let objProject={
      procurement_imagePath:this.procurement_imagePath,
      procurement_locale:this.procurement_locale,
      procurement_domain:this.procurement_domain,
      procurement_projectId:this.procurement_projectId,
      procurement_noticesApiUrl:this.procurement_noticesApiUrl,
      procurement_contractsApiUrl:this.procurement_contractsApiUrl,
      procurement_planApiUrl:this.procurement_planApiUrl,

      document_imagePath:this.document_imagePath,
      document_locale:this.document_locale,
      document_projectsApiUrl:this.document_projectsApiUrl,
      document_archivalApiUrl:this.document_archivalApiUrl,
      document_projectid:this.document_projectid,
      document_tabType:this.document_tabType,

      
      newsmedia_imagePath:this.newsmedia_imagePath,
      newsmedia_projectCode:this.newsmedia_projectCode,
      newsmedia_languageCode:this.newsmedia_languageCode,
      newsmedia_url:this.newsmedia_url,
      newsmedia_multimediaApi:this.newsmedia_multimediaApi,

      photo_imagePath :this.photo_imagePath,
   photo_peopleImage:this.photo_peopleImage,
    photo_projectCode:this.photo_projectCode,
    photo_languageCode:this.photo_languageCode,   
    photo_projects_photo_gallery_api:this.photo_projects_photo_gallery_api,
    photo_details_path:this.photo_details_path, 
    photo_viewall_label :this.photo_viewall_label,    
   photo_viewall_link :this.photo_viewall_link
    }
    this.commonservice.closingStatusallUpdated(objProject);
  };
}
