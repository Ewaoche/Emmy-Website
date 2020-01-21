import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadersComponent } from './headers/headers.component';
import { ContentsComponent } from './contents/contents.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PricingsComponent } from './pricings/pricings.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { ClientComponent } from './client/client.component';



const routes: Routes = [
  {path:"", redirectTo: '/Home', pathMatch: 'full'},
  {path:"Home", component:HeadersComponent },
 {path:"About", component:IntroductionComponent},
 {path:"Testimonials", component:TestimonialsComponent},
 {path:"Services", component:ContentsComponent},
 {path:"Gallery", component:GalleriesComponent},
 {path:"Clients", component:ClientComponent},
 {path:"Pricing", component:PricingsComponent},

];

          
     

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
