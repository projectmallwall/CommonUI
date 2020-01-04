import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BodyComponent } from './body/body.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionModule } from '@section/section.module';


@NgModule({
  declarations: [BodyComponent, NavBarComponent, HeaderComponent, FooterComponent],
  imports: [
    SharedModule,
    SectionModule
  ]
})
export class RendererModule {

  //Below constructor is added as per this article. This is our core module and should be initialised only once. For that it should be
  //imported only once i.e. in app module.
  //https://medium.com/@michelestieven/organizing-angular-applications-f0510761d65a
  constructor(@Optional() @SkipSelf() coreRenderer: RendererModule){
    if (coreRenderer) {
      throw new Error("This is the core renderer module and should be initialised only once i.e. in app module");
    }
  }
 }
