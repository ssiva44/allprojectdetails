import { Component,ElementRef } from '@angular/core';
import {CommonService} from './common.service';
import {Router} from '@angular/router'
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { PlatformLocation } from '@angular/common';
@Component({
  selector: 'allprojects',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'allprojects';
  summary_locale: string;
  allLocales:any={};
  loading: boolean;
  summary_imagePath: string;
  summary_projectApi: string;
  summary_procurementApi: string;   
  summary_lendingApi: string;
  summary_mapPath: string;
  summary_projectCode: string;
  summary_procurementsPath: string;
  summary_procurementSearchPath: string;
  summary_projectResponse: any;
  project_name:string="";
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

summary_routing:string;
procurement_routing:string;
document_routing:string;
newsmedia_routing:string;
photogallery_routing:string;
summary_projectresponse:string;
issummary:boolean=false;

abstract: string;
  keyDetails: string;
  finances: string;
  ratings: string;
  results: string;
  summary: string;
  procurement: string;
  documents: string;
  news: string;
  photo: string;

  constructor(private element: ElementRef,private commonservice:CommonService,
    private http:HttpClient,private routing:Router,private location: PlatformLocation) {   
    this.summary_imagePath = this.element.nativeElement.getAttribute('imagePath'); 
    this.summary_projectApi = this.element.nativeElement.getAttribute('summary-project-api');
    //this.summary_procurementApi = this.element.nativeElement.getAttribute('summary-procurement-api');
    this.summary_mapPath = this.element.nativeElement.getAttribute('summary-mapPath');
    this.summary_projectCode = this.element.nativeElement.getAttribute('projectCode');          
    this.summary_locale = this.element.nativeElement.getAttribute('locale');  
   // this.summary_projectsPath = this.element.nativeElement.getAttribute('summary-projects-path');  
    //this.summary_procurementsPath = this.element.nativeElement.getAttribute('summary-procurements-path');  
    //this.summary_procurementSearchPath = this.element.nativeElement.getAttribute('summary-procurement-search-path');  
    //this.summary_projectListPath = this.element.nativeElement.getAttribute('summary-project-list-path'); 

		this.summary_routing = this.element.nativeElement.getAttribute('summary-routing');  
    this.procurement_routing = this.element.nativeElement.getAttribute('procurement-routing');  
    this.document_routing = this.element.nativeElement.getAttribute('document-routing');  
    this.newsmedia_routing = this.element.nativeElement.getAttribute('newsmedia-routing');  
    this.photogallery_routing = this.element.nativeElement.getAttribute('photogallery-routing');
    this.allLocales = {
      en : {
          abstract: 'Abstract',
          keyDetails: 'Key Details',
          finances:'Finances',
          ratings:'Ratings',
          results:'Results',
          summary:'Summary',
          procurement:'Procurement',
          documents:'Documents',
          news:"News and media",
          photo:'Photo Gallery'
      },
      es : {
          abstract: 'Abstracto',
          keyDetails: 'Detalles clave' ,
          finances:'Finanzas',
          ratings:'Calificaciones',
          results:'resultados',
          summary:'RESUMEN',
          procurement:'OBTENCIÓN',
          documents:'DOCUMENTOS',
          news:"NOTICIAS Y MEDIOS",
          photo:'Galería de fotos'
      },
      fr : {
          abstract: 'Abstrait',
          keyDetails: 'Détails clés' ,
          finances:'Finances',
          ratings:'Évaluations',
          results:'Résultats',
          summary:'résumé',
          procurement:'approvisionnement',
          documents:'Documents',
          news:"Nouvelles et médias",
          photo:'Galerie de photos'
         
      },
      pt : {
          abstract: 'Abstrato',
          keyDetails: 'Detalhes principais' ,
          finances:'Finanças',
          ratings:'Classificações',
          results:'Resultados',
          summary:'resumo',
          procurement:'Procurement',
          documents:'Documentos',
          news:"Notícias e mídia",
          photo:'Galeria de fotos'
      },
      ru : {
          abstract: 'Абстрактные',
          keyDetails: 'Основные сведения' ,
          finances:'Финансы',
          ratings:'Рейтинги',
          results:'Результаты',
          summary:'резюме',
          procurement:'закупка',
          documents:'документы',
          news:"Новости и СМИ",
          photo:'Фотогалерея'
      },
      ar : {
          abstract: 'تفاصيل رئيسة',
          keyDetails: 'التفاصيل الرئيسية' ,
          finances:'المالية',
          ratings:'تصنيفات',
          results:'النتائج',
          summary:'ملخص',
          procurement:'تدبير',
          documents:'مستندات',
          news:"أخبار ووسائط إعلام",
          photo:'معرض الصور'
      },
      zh : {
          abstract: '摘要',
          keyDetails: '主要细节' ,
          finances:'财务',
          ratings:'評級',
          results:'成果',
          summary:'概要',
          procurement:'採購',
          documents:'文件',
          news:"新聞和媒體",
          photo:'照片庫'
      }
  } 

  this.abstract = this.allLocales[this.summary_locale].abstract;
  this.keyDetails = this.allLocales[this.summary_locale].keyDetails;
  this.finances = this.allLocales[this.summary_locale].finances;
  this.ratings = this.allLocales[this.summary_locale].ratings;
  this.results = this.allLocales[this.summary_locale].results;
  this.summary = this.allLocales[this.summary_locale].summary;
  this.procurement = this.allLocales[this.summary_locale].procurement;
  this.news = this.allLocales[this.summary_locale].news;
  this.documents = this.allLocales[this.summary_locale].documents;
  this.photo = this.allLocales[this.summary_locale].photo;

    if(routing.config!=undefined){
      routing.config.forEach((query:any) => {

        if(query.loadChildren!=undefined){
          if(query.loadChildren.indexOf('summary')!=-1){
            query.path = this.summary_routing;
          }
          if(query.loadChildren.indexOf('procurement')!=-1){
            query.path = this.procurement_routing;
          }
          if(query.loadChildren.indexOf('documents')!=-1){
            query.path = this.document_routing;
          }
          if(query.loadChildren.indexOf('newsmedia')!=-1){
            query.path = this.newsmedia_routing;
          }
          if(query.loadChildren.indexOf('photogallery')!=-1){
            query.path = this.photogallery_routing;
          }
        }
        if(query.pathMatch!=undefined){
          if(query.pathMatch.indexOf('full')!=-1){
            query.redirectTo=this.summary_routing;
          }
        }
      });
    }
    routing.resetConfig(routing.config);
    this.newsmedia_imagePath = this.element.nativeElement.getAttribute('imagePath'); 
    this.newsmedia_projectCode = this.element.nativeElement.getAttribute('projectCode');
    this.newsmedia_languageCode = this.element.nativeElement.getAttribute('locale');    
    this.newsmedia_url = this.element.nativeElement.getAttribute('newsmedia-news-media-api');
    this.newsmedia_multimediaApi = this.element.nativeElement.getAttribute('newsmedia-multimedia-api'); 
    let url = this.summary_projectApi + '&id=' + this.summary_projectCode + '&apilang=' + this.summary_locale;
        this.http.post(url,'').subscribe((response:any)=>{
         // this.loading = false;
          let projectDetails = response.projects[this.newsmedia_projectCode];
          this.project_name= projectDetails.project_name
        })

    this.procurement_imagePath = this.element.nativeElement.getAttribute('imagePath');
		this.procurement_locale = this.element.nativeElement.getAttribute('locale');
		this.procurement_domain = this.element.nativeElement.getAttribute('procurement-domain');
    this.procurement_projectId = this.element.nativeElement.getAttribute('projectCode');
    this.procurement_noticesApiUrl=this.element.nativeElement.getAttribute('procurement-noticesApiUrl');
		this.procurement_contractsApiUrl=this.element.nativeElement.getAttribute('procurement-contractsApiUrl');
    this.procurement_planApiUrl=this.element.nativeElement.getAttribute('procurement-planApiUrl');
    
    this.document_imagePath = this.element.nativeElement.getAttribute('imagePath');
		this.document_locale = this.element.nativeElement.getAttribute('locale');
		this.document_projectsApiUrl=this.element.nativeElement.getAttribute('document-projectsApiUrl');
		this.document_archivalApiUrl=this.element.nativeElement.getAttribute('document-archivalApiUrl');
		this.document_projectid=this.element.nativeElement.getAttribute('projectCode');
    this.document_tabType=this.element.nativeElement.getAttribute('document-type');
    
    
    this.photo_imagePath = this.element.nativeElement.getAttribute('imagePath'); 
    this.photo_peopleImage = this.element.nativeElement.getAttribute('photo-peopleImage'); 
    this.photo_projectCode = this.element.nativeElement.getAttribute('projectCode');
    this.photo_languageCode = this.element.nativeElement.getAttribute('locale');    
    this.photo_projects_photo_gallery_api = this.element.nativeElement.getAttribute('photo-projects-photo-gallery-api');
    this.photo_details_path = this.element.nativeElement.getAttribute('photo-details-path');     
    this.photo_viewall_label = this.element.nativeElement.getAttribute('photo-viewall-label');     
    this.photo_viewall_link = this.element.nativeElement.getAttribute('photo-viewall-link'); 
   
    let objProject={
      summary_imagePath :this.summary_imagePath,
      summary_projectApi:this.summary_projectApi,
      summary_mapPath:this.summary_mapPath,
      summary_projectCode:this.summary_projectCode,
      summary_locale:this.summary_locale,
      summary_url:url,

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
   photo_viewall_link :this.photo_viewall_link,

   summary_routing:this.summary_routing,
   procurement_routing:this.procurement_routing,
   document_routing:this.document_routing,
   newsmedia_routing:this.newsmedia_routing,
   photogallery_routing:this.photogallery_routing,

    }
    this.commonservice.closingStatusallUpdated(objProject);
    
    location.onPopState(() => {
    //  this.load();
  });
  }

  ngOnInit(){
   // this.load();
    $(window).scroll(function(){
      if ($(window).scrollTop() >= 300) {
         $('#subnav_section').addClass('fixed-header');
      }
      else {
         $('#subnav_section').removeClass('fixed-header');
      }
  });
  }
  ngOnChanges() {
   
  }

  
load(){
  this.clear();
  //this.issummary = false;
  if(window.location.pathname =='/'+this.summary_routing){
   // this.issummary = true;
    $('#summary_top').addClass('active');
  }
  if(window.location.pathname =='/'+this.procurement_routing){
    $('#procurement_top').addClass('active');
  }
  if(window.location.pathname =='/'+this.document_routing){
    $('#documents_top').addClass('active');
  }
  if(window.location.pathname =='/'+this.newsmedia_routing){
    $('#news_top').addClass('active');
  }
  if(window.location.pathname =='/'+this.photogallery_routing){
    $('#photo_top').addClass('active');
  }
}
  navigationRouting(params,event:any){
    $('#wrap ul li a').removeClass('active');
    setTimeout(()=>{
      event.srcElement.classList.add("active");
    },0)
   // this.issummary = false;
    if(params=="summary"){
      //this.issummary = true;
      this.routing.navigate([this.summary_routing]);
    }else if(params=="procurement"){
      this.routing.navigate([this.procurement_routing]);
    }else if(params=="documents"){
     // $('#documents_top').addClass('active');
      this.routing.navigate([this.document_routing]);
    }else if(params=="news"){
     // $('#news_top').addClass('active');
      this.routing.navigate([this.newsmedia_routing]);
    }else if(params=="photo"){
      this.routing.navigate([this.photogallery_routing]);
    }

  }
 clear(){
  $('#summary_top').removeClass('active');
  $('#procurement_top').removeClass('active');
  $('#documents_top').removeClass('active');
  $('#news_top').removeClass('active');
  $('#photo_top').removeClass('active');
  
 }
  

  navigate(){
   
  }
}
