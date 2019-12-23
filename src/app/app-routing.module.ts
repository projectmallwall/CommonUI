import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './renderer/body/body.component';
import { HeaderComponent } from './renderer/header/header.component';
import { NavBarComponent } from './renderer/nav-bar/nav-bar.component';
import { FooterComponent } from './renderer/footer/footer.component';
import { SectionComponent } from './section/section/section.component';


const routes: Routes = [{
  path: '',
  component: HeaderComponent,
  outlet: 'header'
}, {
  path: 'section',
  component: SectionComponent
}, {
  path: '',
  component: NavBarComponent,
  outlet: 'navbar'
}, {
  path: '',
  component: FooterComponent,
  outlet: 'footer'
}, {
  path: '**',
  component: BodyComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
