import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdkService } from './sdk.servive';
import { CredentialsService } from './credentials.service.ts';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { SDKInceptor } from './http-interceptor.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SdkService,
    CredentialsService,
    {provide: HTTP_INTERCEPTORS, useClass: SDKInceptor, multi: true}
  ],
  declarations: []
})
export class SharedModule {
}
