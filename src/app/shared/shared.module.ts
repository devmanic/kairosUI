import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdkService } from './sdk.servive';
import { CredentialsService } from './credentials.service.ts';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SDKInceptor } from './http-interceptor.service';
import { LoaderService } from './loader.service';
import { LoaderComponent } from './components/loader.component';
import { TitleService } from './title.service';
import { RouterModule } from '@angular/router';
import { Page404Component } from './components/404-pate.component';

const components: any[] = [
  LoaderComponent,
  Page404Component
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    LoaderService,
    TitleService,
    SdkService,
    CredentialsService,
    {provide: HTTP_INTERCEPTORS, useClass: SDKInceptor, multi: true}
  ],
  declarations: components,
  exports: components
})
export class SharedModule {
}
