import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ChairsComponent } from './chairs/chairs.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent
},{
  path:'home',
  component:HomeComponent
},{
  path:'chairs',
  component:ChairsComponent
},{
  path:'contactus',
  component:AboutusComponent
},{
  path:'faq',
  component:FaqComponent
},{
  path:'gallery',
  component:GalleryComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
