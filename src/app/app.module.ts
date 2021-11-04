import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigatorComponent } from './shared/components/navigator/navigator.component';
import { ServicosComponent } from './shared/components/servicos/servicos.component'; 
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { LogotipoComponent } from './shared/components/logotipo/logotipo.component';
import { LogoComponent } from './components/logo/logo.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectComponent } from './shared/components/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigatorComponent,
    ServicosComponent,
    QuemSomosComponent,
    LogotipoComponent,
    LogoComponent,
    BannerComponent,
    FooterComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  faCoffee = faCoffee;
}
