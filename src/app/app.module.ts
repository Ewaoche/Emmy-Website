import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootersComponent } from './footers/footers.component';
import { HeadersComponent } from './headers/headers.component';
import { ContentsComponent } from './contents/contents.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PricingsComponent } from './pricings/pricings.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { ClientComponent } from './client/client.component';
import { SocialComponent } from './social/social.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import {ConfigService} from  './config.service';


@NgModule({
  declarations: [
    AppComponent,
   FootersComponent,
   HeadersComponent,
   ContentsComponent,
   IntroductionComponent,
   PricingsComponent,
   TestimonialsComponent,
   GalleriesComponent,
   ClientComponent,
   SocialComponent,
   NavigationComponent,
   HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  
   
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
