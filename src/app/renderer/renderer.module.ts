import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [BodyComponent, NavBarComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class RendererModule { }
