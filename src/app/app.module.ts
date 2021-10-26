import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigatorComponent } from './shared/components/navigator/navigator.component';
import { ServicosComponent } from './servicos/servicos.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { LogotipoComponent } from './shared/components/logotipo/logotipo.component';
import { LogoComponent } from './components/logo/logo.component';
import { BannerComponent } from './shared/components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigatorComponent,
    ServicosComponent,
    QuemSomosComponent,
    LogotipoComponent,
    LogoComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
