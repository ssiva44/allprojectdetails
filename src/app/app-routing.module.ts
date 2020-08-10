import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{SummaryModule} from './summary/summary.module';
import{ProcurementModule} from './procurement/procurement.module';
import{DocumentsModule} from './documents/documents.module';
import{NewsmediaModule} from './newsmedia/newsmedia.module';
import{PhotogalleryModule} from './photogallery/photogallery.module';
const routes: Routes = [
{
  path:'project-detail',loadChildren:() => SummaryModule
},
{
  path:'project-procurement',loadChildren:() => ProcurementModule
},
{
  path:'document-detail',loadChildren:() => DocumentsModule
},
{
  path:'news-media',loadChildren:() => NewsmediaModule
},{
  path:'photo-gallery',loadChildren:() => PhotogalleryModule
},
{
   path: '', redirectTo: 'project-detail', pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
